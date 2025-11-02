provider "aws" {
  region = var.aws_region
}

resource "aws_vpc" "main" {
  cidr_block = var.vpc_cidr_block

  tags = {
    Name = "autodevstudio-vpc"
  }
}

resource "aws_subnet" "main" {
  count             = 2
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.${count.index + 1}.0/24"
  availability_zone = "${var.aws_region}${element(["a", "b"], count.index)}"

  tags = {
    Name = "autodevstudio-subnet-${count.index + 1}"
  }
}

resource "aws_iam_role" "eks_cluster_role" {
  name = "eks-cluster-role"

  assume_role_policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "eks.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
POLICY
}

resource "aws_eks_cluster" "main" {
  name     = "autodevstudio-eks"
  role_arn = aws_iam_role.eks_cluster_role.arn

  vpc_config {
    subnet_ids = aws_subnet.main[*].id
  }

  depends_on = [aws_iam_role.eks_cluster_role]
}

resource "aws_db_instance" "main" {
  allocated_storage    = 20
  engine               = "postgres"
  instance_class       = "db.t3.micro"
  db_name              = "autodevstudio"
  username             = "admin"
  password             = var.db_password
  skip_final_snapshot  = true
}

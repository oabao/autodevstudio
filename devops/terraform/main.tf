# devops/terraform/main.tf

provider "aws" {
  region = "us-east-1"
  # In a real-world scenario, access keys would be configured
  # through environment variables or an IAM role.
}

# Define the Virtual Private Cloud (VPC)
resource "aws_vpc" "main" {
  cidr_block       = "10.0.0.0/16"
  instance_tenancy = "default"

  tags = {
    Name = "autodevstudio-vpc"
  }
}

# Define public subnets
resource "aws_subnet" "public" {
  count             = 2
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.${count.index + 1}.0/24"
  availability_zone = "us-east-1${element(["a", "b"], count.index)}"

  tags = {
    Name = "autodevstudio-public-subnet-${count.index + 1}"
  }
}

# Define private subnets
resource "aws_subnet" "private" {
  count             = 2
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.${count.index + 3}.0/24"
  availability_zone = "us-east-1${element(["a", "b"], count.index)}"

  tags = {
    Name = "autodevstudio-private-subnet-${count.index + 1}"
  }
}

# Define the EKS Cluster
resource "aws_eks_cluster" "main" {
  name     = "autodevstudio-eks-cluster"
  role_arn = aws_iam_role.eks_cluster.arn

  vpc_config {
    subnet_ids = aws_subnet.public.*.id
  }

  depends_on = [
    aws_iam_role_policy_attachment.eks_cluster_AmazonEKSClusterPolicy,
    aws_iam_role_policy_attachment.eks_cluster_AmazonEKSVPCResourceController,
  ]
}

# Define IAM Role for EKS Cluster
resource "aws_iam_role" "eks_cluster" {
  name = "autodevstudio-eks-cluster-role"

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

resource "aws_iam_role_policy_attachment" "eks_cluster_AmazonEKSClusterPolicy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
  role       = aws_iam_role.eks_cluster.name
}

resource "aws_iam_role_policy_attachment" "eks_cluster_AmazonEKSVPCResourceController" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSVPCResourceController"
  role       = aws_iam_role.eks_cluster.name
}

# Define the PostgreSQL RDS Instance
resource "aws_db_instance" "main" {
  allocated_storage    = 20
  storage_type         = "gp2"
  engine               = "postgres"
  engine_version       = "13.4"
  instance_class       = "db.t3.micro"
  db_name              = "autodevstudiodb"
  username             = "admin"
  password             = "password" # In a real-world scenario, use a secret manager
  parameter_group_name = "default.postgres13"
  skip_final_snapshot  = true
}

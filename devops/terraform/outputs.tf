output "vpc_id" {
  description = "The ID of the VPC."
  value       = aws_vpc.main.id
}

output "eks_cluster_name" {
  description = "The name of the EKS cluster."
  value       = aws_eks_cluster.main.name
}

output "rds_instance_endpoint" {
  description = "The endpoint of the RDS instance."
  value       = aws_db_instance.main.endpoint
}

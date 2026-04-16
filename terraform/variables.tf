variable "aws_region" {
  description = "AWS region to deploy into"
  type        = string
  default     = "us-east-1"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}

variable "ssh_key_name" {
  description = "Name of the SSH key pair in AWS"
  type        = string
}

variable "public_key_path" {
  description = "Path to your public SSH key"
  type        = string
}

variable "public_key" {
  type = string
}


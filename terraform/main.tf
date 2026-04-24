resource "aws_key_pair" "deployer" {
  key_name   = "deployer-key"
  public_key = var.public_key
}

resource "aws_security_group" "microservices_sg" {
  name        = "microservices-sg"
  description = "Allow SSH, HTTP, and API traffic"

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "API Gateway"
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    description = "Allow all outbound"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "microservices_vm" {
  ami           = "ami-04b70fa74e45c3917"
  instance_type = var.instance_type
  key_name      = aws_key_pair.deployer.key_name
  associate_public_ip_address = true

  vpc_security_group_ids = [
    aws_security_group.microservices_sg.id
  ]

  tags = {
    Name = "microservices-server"
  }
}

resource "aws_eip" "microservices_ip" {
  instance = aws_instance.microservices_vm.id
}

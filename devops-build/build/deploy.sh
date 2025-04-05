#!/bin/bash
echo "Deploying to server..."
ssh -i AWS.pem ubuntu@<EC2_PUBLIC_IP> << EOF
  docker pull prasanna1808/dev:latest
  docker stop app || true
  docker rm app || true
  docker run -d --name app -p 3000:3000 prasanna1808/dev:latest
EOF
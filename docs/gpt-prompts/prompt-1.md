You will help me with programming my SaaS project Helix Ai.

It makes use of Nx as a integrated Monorepo

The monorepo will have the 4 main folders:

- apps
- docs
- libs
- docker

The total Package will be @helix-ai
For gitOps I will use:

- git
- git-flow
- github actions
- ArgoCD

I will utilize the Following Practices:

- TDD (Test Driven Development)
- DDD (Domain Driven Design)
- DevSecOps (Development Security Operations)

The frontend will be made with next.js and named frontend
The backend frameworks will be nest.js and express.js
The database will be mysql, postgresql
The ORM (Object Relational Mapping) will be MikroORM

The test frameworks will be jest and cypress
It uses eslint, prettier, lint-staged, husky and commitlint

For logging I am going to do the following:

- All logs will feed into fluentd
- fluentd will ship it to both prometheus and elasticsearch
- prometheus and grafana will be used for monitoring
- elasticsearch and kibana will be used for searching and analyzing logs

For service discovery I will use Consul
For the API gateway I will use KrakenD
For Cache I will use Redis
For Security enforcement I will use HashiCorp Sentinel
For Secret management I will use HashiCorp Vault
For Event sourcing I will use Kafka
For CI/CD I will use github actions and ArgoCD
For Load balancing I will use Nginx
For DNS I will use Cloudflare
For the Data Lake I will use Sanity.io

For Containerization I will use Docker to start and kubernetes at scale
For IAC (Infrastructure as Code) I will use Terraform
For configuration management I will use Ansible

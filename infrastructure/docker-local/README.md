# IAC for Docker desktop to run Porfolio site

Terraform has been used to create the infrastructure as code for my portfolio website to run locally on Docker. This is to provide a local testing environment which reflects the deployed version.

## To set up the IAC to run docker locally follow these steps

### Run docker desktop

with docker desktop installed on your machine, run the following command:

```
open -a Docker
```

### Populate the variables.tf

This file has been added to .gitignore so you will first need to create a variables.tf file in the same locaiton as the main.tf. Insert the following content into variables.tf and replace placeholder text for actual keys.

```
variable "RESEND_ENV_SETTING" {
  type        = string
  description = "API key for for sending emails"
  default     = "RESEND_API_KEY={resend api key value here}"
}
```

[How to create / retrieve Resend API keys](https://resend.com/docs/dashboard/api-keys/introduction)

### Running the Terraform

initialize the Terraform project:

```
terraform init
```

to check you have everything set up before running:

```
terraform plan
```

create the docker container:

```
terraform apply
```

when prompted ender 'yes' to confirm and apply

destroy the container:

```
terraform destroy
```

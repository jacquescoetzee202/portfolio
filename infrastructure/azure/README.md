# IAC to run Portfolio site in Azure

Terraform has been used to create the infrastructure as code for my portfolio website to run within the cloud. This allows for the application to be quickly created and destroyed in a repeatable manor.

## To create the Azure App Service to host the site follow these steps

### Installations

You will need both terraform and Azure CLI tool installed on your machine. Set up steps can be found in the [Hashicorp docs](https://developer.hashicorp.com/terraform/tutorials/azure-get-started/azure-build)

### Populate the variables.tf

This file has been added to .gitignore so you will first need to create a variables.tf file in the same location as the main.tf. Insert the following content into variables.tf and replace placeholder text for actual keys.

```
variable "PREFIX" {
  type        = string
  description = "The prefix used for all resources in this example"
  default = "{enter a custom prefix}"
}

variable "LOCATION" {
  type        = string
  description = "The Azure location where all resources in this example should be created"
  default     = "australiacentral"
}

variable "RESEND_API_KEY" {
    type = string
    description = "resend email service api key"
    default = "{enter a api key}"
}
```

### Running the Terraform

log in with azure CLI:

```
az login
```

Once logged in select the subscription to target.

create a contributor role for the terraform script to preform actions on your subscription:

```
$ az ad sp create-for-rbac --role="Contributor" --scopes="/subscriptions/<SUBSCRIPTION_ID>"
```

> this is only required if not already set up

> ! Make a note of the returned appID, tenant and password

set the values as environment variables in your terminal:

```
export ARM_CLIENT_ID="<APPID_VALUE>"
export ARM_CLIENT_SECRET="<PASSWORD_VALUE>"
export ARM_SUBSCRIPTION_ID="<SUBSCRIPTION_ID>"
export ARM_TENANT_ID="<TENANT_VALUE>"
```

initialize the Terraform project:

```
terraform init
```

format and validate the terraform if any changes made:

```
terraform fmt
terraform validate
```

to check you have everything set up before running:

```
terraform plan
```

apply the terraform configuration:

```
terraform apply
```

when prompted ender 'yes' to confirm and apply

### useful commands

inspect the current state

```
terraform show
```

for further options see:

```
terraform state
```

destroy the container:

```
terraform destroy
```

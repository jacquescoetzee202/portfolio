# Configure the Azure provider
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "4.1.0"
    }
  }
}

provider "azurerm" {
  subscription_id = var.AZ_SUBSCRIPTION_ID
  features {}
}

resource "azurerm_resource_group" "rg" {
  name     = "${var.PREFIX}-resources"
  location = var.LOCATION
}

resource "azurerm_service_plan" "appplan" {
  name                = "${var.PREFIX}-asp"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  os_type             = "Linux"
  sku_name            = "F1"
}

resource "azurerm_linux_web_app" "lwapp" {
  name                = "${var.PREFIX}-as"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  service_plan_id     = azurerm_service_plan.appplan.id

  app_settings = {
    "WEBSITES_ENABLE_APP_SERVICE_STORAGE" = "false"
    "RESEND_API_KEY"                      = var.RESEND_API_KEY
  }

  site_config {
    always_on = false
    application_stack {
      docker_image_name   = "nginx:latest"
      docker_registry_url = "https://index.docker.io"
    }
  }
}
terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.2"
    }
  }
}

provider "docker" {}

resource "docker_image" "portfolio_remix_image" {
  name         = "portfolio_remix_image"

  build {
    context = "../../"
    dockerfile = "Dockerfile"
  }
}

resource "docker_container" "portfolio_remix_container" {
  image = docker_image.portfolio_remix_image.image_id
  name  = "portfolio_remix_container"

  env = [
    var.RESEND_ENV_SETTING
  ]

  ports {
    internal = 8080
    external = 8080
  }
}

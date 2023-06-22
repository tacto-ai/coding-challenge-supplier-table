

SHELL = /usr/bin/env bash -o pipefail -o errexit -o nounset
OPENAPI_GEN_VERSION = "v5.4.0"
API_SPEC = "/api-spec/build/openapi.yaml"

openapi-generate: openapi-build openapi-generate-frontend

openapi-build:
	yarn generate:api

openapi-generate-frontend:
	rm -rf src/api && \
	docker run --rm \
    --user $(shell id -u):$(shell id -g) \
    -v $(shell pwd):/local openapitools/openapi-generator-cli:$(OPENAPI_GEN_VERSION) generate \
    -i "/local$(API_SPEC)" \
    -g typescript-fetch \
    -o /local/src/api \
    --additional-properties=withInterfaces=true,typescriptThreePlus=true

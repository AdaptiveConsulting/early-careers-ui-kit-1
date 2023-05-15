# early-careers-ui-kit-1

# CI/CD

We practice continuous integration and deployment. Merging to main causes a build and deployment to [@adaptive-academy/ui-kit-2023](https://adaptiveconsulting.github.io/early-careers-ui-kit-1/?path=/docs/design-system-about--docs).

![Deployment Pipeline](https://github.com/AdaptiveConsulting/early-careers-ui-kit-1/actions/workflows/pipeline.yml/badge.svg)

## Publish artifacts

The npm artifacts are published to a private repository in Adaptive's JFrog Artifactory.

#### Step 1: Add the `ARTIFACTORY_AUTH` secret in GitHub

If a token has already been created and added to the github secrets of the repo, this part can be skipped.

Otherwise, assuming that you already have an access token (if not, please, follow the steps in the [Create an access token section](#Create-an-access-token)), add the access token value
to the GitHub secrets (or ask an admin to do it): [https://github.com/AdaptiveConsulting/early-careers-ui-kit-1/settings/secrets/actions](https://github.com/AdaptiveConsulting/early-careers-ui-kit-1/settings/secrets/actions)

#### Step 2: Add the configuration to `.github/workflows/publish.yml`

Create a step that uses `actions/setup-node@v3`. Paste the following config:

```yaml
- uses: actions/setup-node@v3
  with:
    node-version: 16
    registry-url: "https://weareadaptive.jfrog.io/artifactory/api/npm/ecp-npm-local-public/"
    scope: "@adaptive-academy"
    always-auth: true
---

---
- run: yarn publish:components
  env:
    NODE_AUTH_TOKEN: ${{ secrets.ARTIFACTORY_AUTH }}
```

When using yarn, the `scope` needs to be defined as well. The values for the `registry-url` and `scope` can be found in the `package.json` file. Be aware that the `registry-url` will not be available automatically, this will be provided by IT/SRE and named according to Adaptive's naming convention - see [Confluence](https://weareadaptive.atlassian.net/wiki/spaces/SRE/pages/1519517765/Artifactory+Repositories).

If the `registry-url` is not found, you can retrieve the path from Artifactory. Just make sure that you have the `/api/npm/` is included in the URL.

In the `publish workflow config`, the environment variable `NODE_AUTH_TOKEN` is defined. It should be called as this since it's how yarn gets it.

## Create an access token

The access token is a token used to publish artifacts to Artifactory and do other operations there.
This token can be created by the same user (you don't need an admin to do this since the scope of permissions will be limited to the user operations and not to admin operations or other projects).

This is not the same as the API Key. This won't work as a password but as a credential understood by yarn to create operations. This credential is of the type "Bearer" and is valid for `_authToken`.
By default, it lasts for a year. See the official documentation for more information about this and other parameters.

```bash
# Replace <build-service-user-username> by the username of the build service
# Replace <build-service-user-api-key> by the API key of the build service user
# Speak with admin to get these credentials shared via Adaptive's Password Manager (1Password)

curl -u "<build-service-user-username>:<build-service-user-api-key>" \
  -X POST "https://weareadaptive.jfrog.io/artifactory/api/security/token" \
  -d "scope=applied-permissions/user" \
  -d "description=ECP publish token" \
  -d "<build-service-user-username>"
```

The response should look like this (access token shortened for obvious reasons):

```json
{
  "access_token": "eyJ2ZXIiOiIyIiwidHlwIjoiSldUIiwiYWxnIjoiU...",
  "expires_in": 31536000,
  "scope": "applied-permissions/user",
  "token_type": "Bearer"
}
```

For more info: [https://www.jfrog.com/confluence/display/JFROG/JFrog+Platform+REST+API#JFrogPlatformRESTAPI-CreateToken](https://www.jfrog.com/confluence/display/JFROG/JFrog+Platform+REST+API#JFrogPlatformRESTAPI-CreateToken)

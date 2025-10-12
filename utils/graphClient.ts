// utils/graphClient.ts
import { PublicClientApplication } from '@azure/msal-browser'
import { Client } from '@microsoft/microsoft-graph-client'

const msalConfig = {
  auth: {
    clientId: 'SEU_CLIENT_ID',
    authority: 'https://login.microsoftonline.com/SEU_TENANT_ID',
    redirectUri: 'http://localhost:3000',
  },
}

const msalInstance = new PublicClientApplication(msalConfig)

export async function getGraphClient() {
  const accounts = msalInstance.getAllAccounts()
  if (!accounts.length) {
    await msalInstance.loginPopup({ scopes: ['Files.ReadWrite.All', 'User.Read'] })
  }
  const token = await msalInstance.acquireTokenSilent({
    scopes: ['Files.ReadWrite.All', 'User.Read'],
    account: msalInstance.getAllAccounts()[0],
  })
  return Client.init({
    authProvider: (done) => {
      done(null, token.accessToken)
    },
  })
}
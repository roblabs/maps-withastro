## <https://jwt.io>

### HEADER:ALGORITHM & TOKEN TYPE

```json
{
  "alg": "ES256",       // Signature or encryption algorithm
  "typ": "JWT",         // Type of token
  "kid": "VKGGG3L5BX"   // Key ID
}
```

### PAYLOAD:DATA

#### localhost_3141.jwt

```json
{
  "iss": "J7V35W7ES8",  // Issuer (who signed and created this token)
  "iat": 1713329031,    // Issued at (seconds since Unix epoch)
  "exp": 1744675200,    // Expiration time (seconds since Unix epoch)
  "origin": "http://localhost:3141"
}
```

#### maps-withastro.roblabs.com.jwt

```json
{
  "iss": "J7V35W7ES8",  // Issuer (who signed and created this token)
  "iat": 1713329336,    // Issued at (seconds since Unix epoch)
  "exp": 1744675200,    // Expiration time (seconds since Unix epoch)
  "origin": "https://maps-withastro.roblabs.com"
}
```

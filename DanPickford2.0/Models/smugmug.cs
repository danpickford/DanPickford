using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DotNetOpenAuth.OAuth;
using DotNetOpenAuth.Messaging;
using DotNetOpenAuth.OAuth.ChannelElements;
using DanPickford2._0.Classes;
namespace DanPickford2._0.Models
{
    public class smugmug
    {

        public OAuthTokenManager InMemoryTokenManager = new OAuthTokenManager("ptImcZ4sIXVNENb5inyDpeBivcP6FEgB", "9ad05e770c6bce11a430fbfafae10396");

        public ServiceProviderDescription GetServiceDescription()
        {
            return new ServiceProviderDescription
            {
                AccessTokenEndpoint = new MessageReceivingEndpoint("https://api.smugmug.com/services/oauth/getAccessToken.mg", HttpDeliveryMethods.PostRequest),
                RequestTokenEndpoint = new MessageReceivingEndpoint("https://api.smugmug.com/services/oauth/getRequestToken.mg", HttpDeliveryMethods.PostRequest),
                UserAuthorizationEndpoint = new MessageReceivingEndpoint("https://api.smugmug.com/services/oauth/authorize.mg", HttpDeliveryMethods.PostRequest),
                TamperProtectionElements = new ITamperProtectionChannelBindingElement[] { new HmacSha1SigningBindingElement() },
                ProtocolVersion = ProtocolVersion.V10
            };
        }

    }
}
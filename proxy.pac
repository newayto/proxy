function FindProxyForURL(url, host)
 
{

        if (myIpAddress() == "11.0.19.90")   { 
           return "PROXY proxy3.bj.petrochina:8080";
        }
        else  {
           return "DIRECT";
        } 

}
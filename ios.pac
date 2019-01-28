function FindProxyForURL(url, host) { 
	if (shExpMatch(host, "*snmps.mirado1.info/publist/allEntities*") ||
		shExpMatch(host, "*server4.chinesepod.com:444/1.0.0/instances/prod/main/get-user-info")) 
		return "PROXY 192.168.2.109:8888; DIRECT"; 
}

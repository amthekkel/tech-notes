#SSH



#adding key to the ssh agent

###first start ssh agent
`eval 'ssh-agent -s'`

###Next add the private key to the ssh agent
`ssh-add ~/.ssh/id_rsa`


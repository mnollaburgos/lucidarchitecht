//Imports SDK
import { ImmutableXClient, Link } from '@imtbl/imx-sdk';

//Setting the connection urls
const linkAddress = 'https://link.x.immutable.com';
const apiAddress = 'https://api.x.immutable.com/v1';

// Creating the link objects 

// Link SDK 
const link = new Link(linkAddress);

// IMX Client  
const client = await ImmutableXClient.build({ publicApiUrl: apiAddress });




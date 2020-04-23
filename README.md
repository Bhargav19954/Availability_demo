# Availability_demo

I have created two collections
1 Users
2.availabilities

currently I have not provided any routes for creating users.

As required I have developed two API's for posting availabilities and fetching the same.

Created two dummy users manually to db and using thier unique ids created availabilities using API.

Demo POST request

URL : localhost:3000/availability

Body : 
{
	"user_id" :"5ea154ed933ae5648636c4cf",
	"startTime":"2019-10-10T11:00:00.000Z",
	"endTime":"2019-10-10T12:30:00.000Z"
}

Demo GET request

URL : localhost:3000/availability?user_id=5ea154ed933ae5648636c4cf
 

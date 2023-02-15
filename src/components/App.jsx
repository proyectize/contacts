import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact){
  return <Card
            key={contact.id}
            name={contact.name}
            imgURL={contact.imgURL}
            phone={contact.phone}
            email={contact.email} />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL="https://media.licdn.com/dms/image/C4D03AQGCPZQUJFa-JQ/profile-displayphoto-shrink_200_200/0/1642457677656?e=1681948800&v=beta&t=8-zdmozK5CxgRPNGC0Y2lGRyGCDYk_D_3jq0jtvJPp4" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;

import React from "react";
import Grid from '@material-ui/core/Grid';
import Contact from "./Contact";

export default function ContactsList({contacts = []}) {

return(
<Grid container spacing={3}>
  {contacts.map((contact) => (
  <Grid item key={contact.id} xs={12} sm={6} lg={3}>
    <Contact first_name={contact.first_name}
      last_name={contact.last_name}
      facility_name={contact.facility_name}
      booking_code={contact.booking_code}
      booking_date={contact.booking_date}
      date_of_birth={contact.date_of_birth} />
  </Grid>
  ))}
</Grid>

);
}
import React from 'react';


export const SEND_EMAIL_SUCCESS = (
  <div>
    <h3>Email Sent Successfully</h3>
    <p>
    Thanks for reaching out to us! Your email has been sent successfully.
    Expect to hear back from us in the next few days.
    </p>
  </div>
);

export const SEND_EMAIL_FAILURE = (
  <div>
    <h3>Email Failed to Send</h3>
    <p>
      Well that’s embarassing. Seems like something when wrong trying to
      send your email. Please email us directly at <a 
      href="mailto:info@climbcrux.org">info (at) climbcrux (dot) org</a>.
    </p>
  </div>
);

<script
    src="https://dev.secuuth.io/JS/prod/Secuuth.bundle.js"
    type="text/javascript"
></script>

<div id="secuuthForm"></div>

const secuuth = new Secuuth({
      // Key Id obtained while creating Project in Dashboard
      keyId: "17669605-97a1-40f2-946d-7d6034287fdd",
      // Name of the Form
      profileName: "Default",
      // Div id created in above step
      containerId: "secuuthForm",
      onSubmit: (payload) => {
      // Send payload to your backend server
      })
import "./Support.css"
import { useFormik } from 'formik';


export default function FormFillout(){
    const formik = useFormik({
        initialValues: {
          email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        }
      })
      return (
        <form onSubmit={formik.handleSubmit}>
          <div className="InputContainer">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="example@iBanana.com"
          />
          </div>
          <div className="InputContainer">
          <label htmlFor="FirstName">First name</label>
          <input
            id="FirstName"
            name="FirstName"
            type="FirstName"
            placeholder="Peely"
            onChange={formik.handleChange}
            value={formik.values.FirstName}
          />
          </div>
          <div className="InputContainer">
          <label htmlFor="">Last Name</label>
          <input
            id="LastName"
            name="LastName"
            type="LastName"
            placeholder="Skin"
            onChange={formik.handleChange}
            value={formik.values.LastName}
          />
          </div>
          <div className="InputContainer">
          <label htmlFor="Message">Message</label>
          <input
            id="Message"
            name="Message"
            type="Message"
            onChange={formik.handleChange}
            value={formik.values.Message}
          />
          </div>
          <button type="submit">Submit</button>
        </form>
      );
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import logo from "/images/logo.svg";
import image from "/images/illustration-dashboard.png";
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function App() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <section className="flex flex-col justify-center items-center gap-4 p-8">
        <img src={logo} alt="" className='w-20' />
        <h1 className='text-4xl text-Gray font-semibold'>We are launching <span className='text-VeryDarkBlue'>soon!</span></h1>
        <p>Subscribe and get notified</p>
        <Formik
          initialValues={{ email: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Whoops! It looks like you forgot to add your email';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Please provide a valid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <div className={`flex flex-col sm:flex-row gap-2 ${errors.email && touched.email ? 'border-red-500' : ''}`}>
                <Field type="email" name="email" className={`p-2 rounded-full w-full sm:w2/3 border-2 ${errors.email && touched.email ? 'border-red-500' : ''}`} placeholder='Your email address' />
                <ErrorMessage name="email" component="span" className="text-LightRed sm:hidden" />
                <button type="submit" disabled={isSubmitting} className='sm:w-48 bg-Blue rounded-full font-semibold text-white p-2'>Notify Me</button>
              </div>
              <ErrorMessage name="email" component="span" className="text-LightRed hidden sm:block" />
            </Form>
          )}
        </Formik>
        <img src={image} alt="" />
        <div className='flex flex-row gap-4'>
          {[faFacebookF, faTwitter, faPinterest].map((icon, index) => (
            <div key={index} className='px-4 py-2 rounded-full cursor-pointer hover:bg-PaleBlue'>
              <FontAwesomeIcon icon={icon} color='blue' />
            </div>
          ))}
        </div>
        <span className='text-Gray'>&copy; Copyright Ping. All rights reserved.</span>
      </section>
    </main>
  );
}

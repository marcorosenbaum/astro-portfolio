import { useForm, type SubmitHandler } from 'react-hook-form';

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = (data, event) => {
    console.log('Form submitted!', data);
    event?.target.submit();
  };

  return (
    <>
      <div
        id="contact-form-modal"
        className="w-screen h-screen fixed top-0 bottom-0 right-0 bg-black/90 flex flex-col justify-center items-center translate-x-[100%] overflow-hidden duration-300"
      >
        <button
          id="hide-contact-form-button"
          className="fixed top-0 right-0 p-8"
        >
          X close
        </button>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="hidden"
            name="subject"
            value="Contact request from marcorosenbaum.com"
          />
          <p>
            <label>
              Your Name:{' '}
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
              />
            </label>
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}{' '}
          </p>
          <p>
            <label>
              Your Email:{' '}
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Please enter a valid email address',
                  },
                })}
              />
            </label>
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}{' '}
          </p>
          <p>
            <label>
              Message:{' '}
              <textarea
                {...register('message', {
                  required: 'Message is required',
                })}
              ></textarea>
            </label>
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}{' '}
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </>
  );
};

export default ContactForm;

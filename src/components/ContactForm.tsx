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
    <div
      id="contact-form-modal"
      className="w-screen h-screen fixed top-0 bottom-0 right-0 bg-black/90 flex flex-col justify-center items-center translate-x-[100%] overflow-hidden duration-300 z-[9999]"
    >
      <button id="hide-contact-form-button" className="fixed top-0 right-0 p-8">
        X close
      </button>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full p-4 sm:px-8 md:px-12 md:w-3/4 max-w-[800px] "
      >
        <input
          type="hidden"
          name="subject"
          value="Contact request from marcorosenbaum.com"
        />
        <p className="flex flex-col">
          <label>Name:</label>
          <input
            className=" rounded-xl p-2 border border-gray-400 text-black"
            type="text"
            placeholder="Your name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}{' '}
        </p>
        <p className="flex flex-col">
          <label>Email:</label>
          <input
            className=" rounded-xl p-2 border border-gray-400 text-black"
            type="email"
            placeholder="Your email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Please enter a valid email address',
              },
            })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}{' '}
        </p>
        <p className="flex flex-col">
          <label>Message:</label>
          <textarea
            className=" rounded-xl p-2 border border-gray-400 text-black h-32"
            placeholder="Please enter your message here. I will get back to you as soon as possible."
            {...register('message', {
              required: 'Message is required',
            })}
          ></textarea>
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}{' '}
        </p>
        <p>
          <button
            className="py-2 mt-8 rounded-full border text-center w-full bg-white text-black border-black"
            type="submit"
          >
            Send
          </button>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;

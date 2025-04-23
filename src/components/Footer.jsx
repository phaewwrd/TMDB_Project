
function Footer() {
  return (
    <div>
        <footer className="footer p-10 bg-base-100 text-base-content h-[300px] flex justify-center ">
          <div className=" w-full flex justify-evenly">
            <div className="flex flex-col gap-5 w-[270px] place-items-start ">
            <div className="text-lg font-semibold">📍 About Us</div>
              <div className="text-neutral z-10">
              Our website is a comprehensive directory of veterinary hospitals across the country, helping pet owners easily and quickly find the nearest pet care facility.
              </div>
              <div className="z-10">© 2025 PetCareFinder | All Rights Reserved.</div>
            </div>

            <div className="flex gap-10 ">
              <div className="flex flex-col gap-5">
                <div className="text-lg font-semibold">📞 Contact Us</div>
                <div className="flex flex-col gap-2">
                  <div className="text-neutral">Email: support@petcarefinder.com</div>
                  <div className="text-neutral">Phone: 012-345-6789</div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="text-lg font-semibold">🔗 Useful Links</div>
                <div className="flex flex-col gap-2">
                  <div className="text-neutral">Find a Veterinary Hospital</div>
                  <div className="text-neutral">24/7 Emergency Services</div>
                  <div className="text-neutral">Pet Care Tips & Advice</div>
                  <div className="text-neutral">Privacy Policy</div>
                </div>
              </div>
             
            </div>
          </div>
        </footer>
      </div>
  );
}

export default Footer;
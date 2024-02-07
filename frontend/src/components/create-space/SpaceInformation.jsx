import React from "react";
import Heading from "../shared/Heading";
import Button from "../ui/Button";
import Input from "../ui/Input";
import InputBox from "../ui/InputBox";
import Label from "../ui/Label";

const SpaceInformation = ({ setActiveTab }) => {
  return (
    <div>
      <Heading>What type of place will guests have?</Heading>

      <form action="" className="mt-9">
        <div className="flex flex-col gap-7">
          <InputBox>
            <Label htmlFor="place">An entire place</Label>
            <Input
              type="text"
              placeholder="Guests have whole place to themselves."
              id="place"
            />
          </InputBox>
          <InputBox>
            <Label htmlFor="room">A room</Label>
            <Input
              type="text"
              placeholder="Guests have their own room in a home, plus access to shared spaces."
              id="room"
            />
          </InputBox>
          <InputBox>
            <Label htmlFor="shared-room">A shared room</Label>
            <Input
              type="text"
              placeholder="Guests sleep in a room or common area that may be shared with you or others."
              id="shared-room"
            />
          </InputBox>
        </div>

        <div className="mt-[72px]">
          <Heading>Where’s your place located? </Heading>
          <p className="text-[22px] font-medium leading-[37px] mt-2">
            Your address is only shared with guests after they’ve made a
            reservation.
          </p>

          <div className="mt-[70px] relative">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14771.99037376455!2d91.82208290000001!3d22.2401701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1707335722787!5m2!1sbn!2sbd"
              // width="600"
              // height="630"
              className="h-[400px] sm:h-[500px] md:h-[630px]"
              style={{ border: 0, width: "100%" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="absolute top-11 left-0 right-0">
              <div className="w-[90%] sm:w-[80%] mx-auto py-9 px-11 bg-white rounded-full flex items-center gap-5 shadow-lg">
                <div>
                  <img src="/images/icons/map.png" alt="map" />
                </div>
                <Input type="text" placeholder="Enter your address" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[72px]">
          <Heading>Tell guests what your place has to offer</Heading>
          <p className="text-[22px] font-medium leading-[37px] mt-2">
            You can add more after publish your listing
          </p>

          <div className="mt-11 grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="py-10 px-5 flex flex-col justify-center items-center gap-5 border border-gray rounded-[25px] cursor-pointer transition-all hover:border-primary">
              <div>
                <img src="/images/icons/wifi-lg.png" alt="icon" />
              </div>
              <h3 className="text-[30px] leading-[47px]">Wifi</h3>
            </div>
            <div className="py-10 px-5 flex flex-col justify-center items-center gap-5 border border-gray rounded-[25px] cursor-pointer transition-all hover:border-primary">
              <div>
                <img src="/images/icons/tv.png" alt="icon" />
              </div>
              <h3 className="text-[30px] leading-[47px]">TV</h3>
            </div>
            <div className="py-10 px-5 flex flex-col justify-center items-center gap-5 border border-gray rounded-[25px] cursor-pointer transition-all hover:border-primary">
              <div>
                <img src="/images/icons/kitchen.png" alt="icon" />
              </div>
              <h3 className="text-[30px] leading-[47px]">Kitchen</h3>
            </div>
            <div className="py-10 px-5 flex flex-col justify-center items-center gap-5 border border-gray rounded-[25px] cursor-pointer transition-all hover:border-primary">
              <div>
                <img src="/images/icons/printer.png" alt="icon" />
              </div>
              <h3 className="text-[30px] leading-[47px]">Printer</h3>
            </div>
            <div className="py-10 px-5 flex flex-col justify-center items-center gap-5 border border-gray rounded-[25px] cursor-pointer transition-all hover:border-primary">
              <div>
                <img src="/images/icons/parking.png" alt="icon" />
              </div>
              <h3 className="text-[30px] leading-[47px]">Parking</h3>
            </div>
            <div className="py-10 px-5 flex flex-col justify-center items-center gap-5 border border-gray rounded-[25px] cursor-pointer transition-all hover:border-primary">
              <div>
                <img src="/images/icons/air-lg.png" alt="icon" />
              </div>
              <h3 className="text-[30px] leading-[47px]">Air Conditioning</h3>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Heading>Workspace rules</Heading>

          <div className="mt-10 flex flex-col gap-6">
            <div className="flex items-center justify-between gap-5 flex-wrap">
              <label
                htmlFor="no-smoking"
                className="text-[22px] font-medium leading-[37px]"
              >
                No smoking
              </label>
              <input
                type="checkbox"
                className="w-6 h-6 rounded-[10px] border border-gray"
                name=""
                id="no-smoking"
              />
            </div>
            <div className="flex items-center justify-between gap-5 flex-wrap">
              <label
                htmlFor="no-pets"
                className="text-[22px] font-medium leading-[37px]"
              >
                No pets
              </label>
              <input
                type="checkbox"
                className="w-6 h-6 rounded-[10px] border border-gray"
                name=""
                id="no-pets"
              />
            </div>
            <div className="flex items-center justify-between gap-5 flex-wrap">
              <label
                htmlFor="workspace-clean"
                className="text-[22px] font-medium leading-[37px]"
              >
                Keep workspace clean
              </label>
              <input
                type="checkbox"
                className="w-6 h-6 rounded-[10px] border border-gray"
                name=""
                id="workspace-clean"
              />
            </div>
          </div>
        </div>

        <div className="mt-24 flex justify-end">
          <Button onClick={() => setActiveTab(2)} className="px-14">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SpaceInformation;

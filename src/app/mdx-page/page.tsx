import React from 'react'

const page = () => {
  return (
    <div className="relative p-4">
    <div className="max-w-3xl mx-auto">
        <div
            className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="">
            <img src="https://projects.arduinocontent.cc/cover-images/dffb6493-768e-41e9-a0aa-7e96140f668a.jpg" alt="Featured Image" className="w-full h-auto object-cover rounded"/>
                <a href="#" className="text-indigo-600 hover:text-gray-700 transition duration-500 ease-in-out text-sm">
                    Arduino
                </a>
                <h1  className="text-gray-900 font-bold text-4xl">Getting Started with the HC-SR04 Ultrasonic sensor</h1>
                <div className="py-5 text-sm font-regular text-gray-900 flex">
                    <span className="mr-3 flex flex-row items-center">
                       <svg className="text-indigo-600" fill="currentColor" height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" ><g>
	<g>
		<path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
		                   	c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path></g></g></svg>
                      <span className="ml-1">6 mins read</span>
                    </span>


                    <a href="#" className="flex flex-row items-center hover:text-indigo-600">
                        <svg className="text-indigo-600" fill="currentColor" height="16px" aria-hidden="true" role="img"
                            focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                            <path fill=""
                                d="M15.4496399,8.42490555 L8.66109799,1.63636364 L1.63636364,1.63636364 L1.63636364,8.66081885 L8.42522727,15.44178 C8.57869221,15.5954158 8.78693789,15.6817418 9.00409091,15.6817418 C9.22124393,15.6817418 9.42948961,15.5954158 9.58327627,15.4414581 L15.4486339,9.57610048 C15.7651495,9.25692435 15.7649133,8.74206554 15.4496399,8.42490555 Z M16.6084423,10.7304545 L10.7406818,16.59822 C10.280287,17.0591273 9.65554997,17.3181054 9.00409091,17.3181054 C8.35263185,17.3181054 7.72789481,17.0591273 7.26815877,16.5988788 L0.239976954,9.57887876 C0.0863319284,9.4254126 0,9.21716044 0,9 L0,0.818181818 C0,0.366312477 0.366312477,0 0.818181818,0 L9,0 C9.21699531,0 9.42510306,0.0862010512 9.57854191,0.239639906 L16.6084423,7.26954545 C17.5601275,8.22691012 17.5601275,9.77308988 16.6084423,10.7304545 Z M5,6 C4.44771525,6 4,5.55228475 4,5 C4,4.44771525 4.44771525,4 5,4 C5.55228475,4 6,4.44771525 6,5 C6,5.55228475 5.55228475,6 5,6 Z">
                            </path>
                        </svg>
                        <span className="ml-1">active</span></a>
                </div>
                <hr/>
                <h3 className="text-2xl font-bold my-5">Project description</h3>
                <p className="text-base leading-8 my-5">
                In this project I will introduce you to the HC-SR04 Ultrasonic sensor.  It works by sending sound waves from the transmitter, which then bounce off of an object and then return to the receiver.  You can determine how far away something is by the time it takes for the sound waves to get back to the sensor.  Let's get right to it! 
                </p>

                <h3 className="text-2xl font-bold my-5">Connections</h3>

                <p className="text-base leading-8 my-5">
                The connections are very simple: 
                </p>
                <ol className='text-base leading-8 my-5'>
                  <li>VCC to 5V </li>
                  <li>GND to GND </li>
                  <li>Trig to pin 9 </li>
                  <li>Echo to pin 10  </li>
                </ol>
                <p>You can actually connect Trig and Echo to whichever pins you want, 9 and 10 are just the ones I'm using. </p>

                <blockquote className="text-md italic leading-8 my-5 p-5  font-semibold">const int trigPin = 9; <br /> const int echoPin = 10; </blockquote>

                <ul>
                  <li>First we define the pins that Trig and Echo are connected to.</li>
                  <li className='bg-slate-300 py-4 px-2 mt-2 rounded-xl'>{`const int trigPin = 9;  const int echoPin = 10;`}</li>
                  <li>Then we declare 2 floats, duration and distance, which will hold the length of the sound wave and how far away the object is. </li>
                  <li className='bg-slate-300 py-4 px-2 mt-2 rounded-xl'>{`float duration, distance;  `}</li>
                  <li>Next, in the setup, we declare the Trig pin as an output, the Echo pin as an input, and start Serial communications.</li>
                  <li className='bg-slate-300 py-4 px-2 mt-2 rounded-xl'>{`void setup() {  
	pinMode(trigPin, OUTPUT);  
	pinMode(echoPin, INPUT);  
	Serial.begin(9600);  
}  
  `}</li>  
                <li>Now, in the loop, what we do is first set the trigPin low for 2 microseconds just to make sure that the pin in low first.  Then, we set it high for 10 microseconds, which sends out an 8 cycle sonic burst from the transmitter, which then bounces of an object and hits the receiver(Which is connected to the Echo Pin).</li>
                <li className='bg-slate-300 py-4 px-2 mt-2 rounded-xl'>{`void loop() {  
	digitalWrite(trigPin, LOW);  
	delayMicroseconds(2);  
	digitalWrite(trigPin, HIGH);  
	delayMicroseconds(10);  
	digitalWrite(trigPin, LOW);  
 `}</li>
 <li>When the sound waves hit the receiver, it turns the Echo pin high for however long the waves were traveling for.  To get that, we can use a handy Arduino function called pulseIn() .  It takes 2 arguments, the pin you are listening to(In our case, the Echo pin), and a state(HIGH or LOW).  What the function does is waits for the pin to go whichever state you put in, starts timing, and then stops timing when it switches to the other state.  In our case we would put HIGH since we want to start timing when the Echo pin goes high.  We will store the time in the duration variable. (It returns the time in microseconds) </li>
 <li className='bg-slate-300 py-4 px-2 mt-2 rounded-xl'>{`duration = pulseIn(echoPin, HIGH);   `}</li>
 <li>Now that we have the time, we can use the equation speed = distance/time , but we will make it time x speed = distance because we have the speed.  What speed do we have?  The speed of sound, of course!  The speed of sound is approximately 340 meters per second, but since the pulseIn() function returns the time in microseconds, we will need to have a speed in microseconds also, which is easy to get.  A quick Google search for "speed of sound in centimeters per microsecond" will say that it is .0343 c/μS.  You could do the math, but searching it is easier.  Anyway, with that information, we can calculate the distance!  Just multiply the duration by .0343 and then divide it by 2(Because the sound waves travel to the object AND back).  We will store that in the distance variable. </li>
 <li className='bg-slate-300 py-4 px-2 mt-2 rounded-xl'>{`distance = (duration*.0343)/2;    `}</li>
 <li>The rest is just printing out the results to the Serial Monitor. </li>
 <li className='bg-slate-300 py-4 px-2  rounded-xl'>{`Serial.print("Distance: ");  
	Serial.println(distance);  
	delay(100);  
}  
`}</li>
                </ul>
                <img src="https://projects.arduinocontent.cc/3892fe4c-2f45-4f9e-b2f1-b59db08cee22.png" alt="Featured Image" className="w-full h-auto mt-10 object-cover rounded"/>
                <ul className='bg-slate-300 mt-4 py-4 px-2 rounded-xl'>
                <h3  className="text-2xl font-bold my-5">whole code</h3>
                  <li>{`const int trigPin = 9;
const int echoPin = 10;

float duration, distance;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);
  distance = (duration*.0343)/2;
  Serial.print("Distance: ");
  Serial.println(distance);
  delay(100);
}`}</li></ul>
                
                <a href="https://projecthub.arduino.cc/Isaac100/getting-started-with-the-hc-sr04-ultrasonic-sensor-7cabe1"
                    className="text-md text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                    check out the project on project hub
                </a>

            </div>

        </div>
    </div>
</div>
  )
}

export default page
function Mainsectionfour(){

    return (

        <div className="rounded-lg shadow-[0_0_9px_-1px_#e2e2e2] mt-10 p-2.5">
        <div className="text-center">
          <h2 className="text-black text-sm font-semibold">Share Your Refer Link</h2>
        </div>
        <div className="mt-2.5">
          <div className="grid grid-cols-4 gap-2.5 justify-center">
            {/* Copy Link Widget */}
            <div className="text-center">
              <div className="flex items-center justify-center border border-gray-300 rounded-full h-10 w-10 mx-auto p-2.5 bg-[#0866ff]/[0.12]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  color="#0866ff"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: 'rgb(8, 102, 255)' }}
                >
                  <rect
                    width="336"
                    height="336"
                    x="128"
                    y="128"
                    fill="none"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    rx="57"
                    ry="57"
                  />
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="m383.5 128 .5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"
                  />
                </svg>
              </div>
              <p className="font-Lato font-medium text-xs mt-1.5">Copy Link</p>
            </div>
  
            {/* WhatsApp Widget */}
            <div className="text-center">
              <div className="flex items-center justify-center border border-green-300 rounded-full h-10 w-10 mx-auto p-2.5 bg-[#2ab13f]/[0.12]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  color="#2ab13f"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: 'rgb(42, 177, 63)' }}
                >
                  <path
                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                  />
                </svg>
              </div>
              <p className="font-Lato font-medium text-xs mt-1.5">Whatsapp</p>
            </div>
  
            {/* Facebook Widget */}
            <div className="text-center">
              <div className="flex items-center justify-center border border-blue-300 rounded-full h-10 w-10 mx-auto p-2.5 bg-[#0866ff]/[0.12]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  color="#0866ff"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: 'rgb(8, 102, 255)' }}
                >
                  <path
                    d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                  />
                </svg>
              </div>
              <p className="font-Lato font-medium text-xs mt-1.5">Facebook</p>
            </div>
  
            {/* Telegram Widget */}
            <div className="text-center">
              <div className="flex items-center justify-center border border-teal-300 rounded-full h-10 w-10 mx-auto p-2.5 bg-[#229ed9]/[0.12]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 256 256"
                  color="#229ed9"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: 'rgb(34, 158, 217)' }}
                >
                  <path
                    d="M227.57,27.7a7,7,0,0,0-7.13-1.22L17.78,105.79a12.23,12.23,0,0,0-2.27,19.27l-1.26,51.8a12.23,12.23,0,0,0,15.32,12.63L110.85,192a12.34,12.34,0,0,0,14.9-4.77l31.25-48.4L191.6,196.65a12.3,12.3,0,0,0,16.62,4.34l44.61-38.65a12.28,12.28,0,0,0,5.51-11.32V39.09a12.29,12.29,0,0,0-7.25-11.1Z"
                  />
                  <path
                    d="M205.67,46.71l-8.14,53.68,23.63-16.43a2.34,2.34,0,0,0,0-4.07l-19.86-13.71a2.34,2.34,0,0,0-2.79.38L102.59,138.41,44.65,91.62a2.35,2.35,0,0,0-2.61.06L23.7,103.57a2.35,2.35,0,0,0,.58,4.5l40.33,27.1,72.47-48.3,30.79,19.78,23.8-16.57A2.34,2.34,0,0,0,205.67,46.71Z"
                  />
                  <path
                    d="M110.5,138.7,167.8,77.2l-24.51-16.27-54.53,34.45L37.43,102.51a2.34,2.34,0,0,0-3.5,2.62l1.64,66.62,21.89-14.62Z"
                  />
                  <path
                    d="M205.67,46.71l-8.14,53.68,23.63-16.43a2.34,2.34,0,0,0,0-4.07l-19.86-13.71a2.34,2.34,0,0,0-2.79.38L102.59,138.41,44.65,91.62a2.35,2.35,0,0,0-2.61.06L23.7,103.57a2.35,2.35,0,0,0,.58,4.5l40.33,27.1,72.47-48.3,30.79,19.78,23.8-16.57A2.34,2.34,0,0,0,205.67,46.71Z"
                  />
                </svg>
              </div>
              <p className="font-Lato font-medium text-xs mt-1.5">Telegram</p>
            </div>
          </div>
        </div>
      </div>


    )
}

export default Mainsectionfour;
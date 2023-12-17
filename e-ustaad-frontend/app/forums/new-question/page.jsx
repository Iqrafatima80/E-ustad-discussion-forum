import React from 'react'
import { content } from "@/app/data/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus, faImage, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Button from '@/app/components/button/Button';

const page = () => {
  const mustReadPoints = content.forums.mustReadPoints;
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-3 w-[70%]">
        <div>
          <h3 className="text-3xl font-bold text-gray-500">New Question</h3>
        </div>
        <div className="w-[100%] flex gap-3 flex-col border rounded-md shadow-xl px-4 py-2">
          <div><label for="countries" class="block mb-2 text-sm font-medium text-gray-900"></label>
            <select id="countries" class="bg-transparent border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-primary block w-full p-2.5">
              <option selected>Choose Categories</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select></div>
          <div className=''>
            <input className='border rounded-lg p-2.5 w-[100%] text-gray-900 text-sm focus:ring-blue-500 focus:border-primary' type='text' placeholder='Type catching attention title' />
          </div>
          <div className=''>
            <textarea rows="15" cols="50" className='border rounded-lg p-2.5 w-[100%] text-gray-900 text-sm focus:ring-blue-500 focus:border-primary' placeholder='Type your question' />
          </div>
          <div className='flex justify-between'>
            <div>
              <Button>
                <div className="flex items-center gap-2">
                  <div>
                    <FontAwesomeIcon icon={faImage} color="white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Add Image</p>
                  </div>
                </div>
              </Button>
            </div>
            <div className='flex gap-3'>
              <div>
                <Button>
                  <div className="flex items-center gap-2 py-[2px]">
                    <p className="text-sm font-bold text-white">Save as Draft</p>
                  </div>
                </Button>
              </div>
              <div>
                <Button>
                  <div className="flex items-center gap-2">
                    <div>
                      <FontAwesomeIcon icon={faPaperPlane} color="white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Publish</p>
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[25%] border rounded-md h-max hidden lg:block">
        {mustReadPoints.map((point) => (
          <div key={point.id} className="px-4 py-8">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faStar} />
              <h3 className="text-lg font-semibold">{point.heading}</h3>
            </div>
            <hr className="border" />
            <ul className="pl-4 list-disc">
              {point.points.map((message, index) => (
                <li key={index} className="py-2 text-sm text-blue-500 cursor-pointer">
                  {message}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div >
  )
}

export default page
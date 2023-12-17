import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faComment, faThumbsUp, faThumbsDown, faAngleUp, faReply } from "@fortawesome/free-solid-svg-icons";
import Button from "@/app/components/button/Button";


export default function page({ params }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3 px-6 py-3 w-[70%] border rounded-md shadow-xl">
          <div className="w-[100%] flex justify-between">
            <div>
              <div className="flex gap-3">
                <div className="w-[100%] h-[100%]">
                  <Image
                    src="/bunny.jpeg"
                    alt=""
                    width={60}
                    height={60}
                    className="rounded-xl "
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div><p className="text-sm font-semibold">
                    @Golanginya
                  </p></div>
                  <div><p className="text-[8px] font-normal">
                    12 November 2020
                  </p></div>
                </div>
              </div>
            </div>
            <div className="flex items-center"><Image
              src="/ellipsis-vertical-solid.svg"
              alt=""
              width={5}
              height={5}
            /></div>
          </div>
          <div>
            <h3 className="text-xl font-bold">How to patch KDE on FreeBSD?</h3>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-sm">Mi magna sed nec nisl mattis. Magna cursus tincidunt rhoncus imperdiet fermentum pretium, pharetra
                nisl. Euismod.</p>
            </div>
            <div className="py-4 pl-5 text-black bg-gray-200" style={{ whiteSpace: 'pre-line' }}>
              {`package main
            import "fmt"
            
            func main() {
              fmt.Println("Hello, world!")
            }
            `}
            </div>
            <div>
              <p className="text-sm">Posuere arcu arcu consectetur turpis rhoncus tellus. Massa, consectetur massa sit fames nulla eu
                vehicula ullamcorper. Ante sit mauris elementum sollicitudin arcu sit suspendisse pretium. Nisl egestas
                fringilla justo bibendum.</p>
            </div>
          </div>
          <div className="w-[100%] flex justify-end">
            <div className="w-[20%]"><Button>
              <div className="flex items-center gap-2">
                <div>
                  <FontAwesomeIcon icon={faUserPlus} color="white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Vote</p>
                </div>
              </div>
            </Button></div>
          </div>
        </div>
        <div className="w-[25%] border h-max hidden lg:block relative">
          <div className="px-4 py-4 text-center">
            <div className="mb-4 relative w-[100%] h-[200px] overflow-hidden border-2 border-gray-900 rounded-full">
              <Image
                fill={true}
                src="/bunny.jpeg"
                alt=""
                className="object-cover w-[200px] h-[200px]"
              />
            </div>
            <div className="flex flex-col justify-center gap-3">
              <div>
                <p className="text-xl font-semibold">
                  @Golanginya
                </p>
              </div>
              <hr className="border" />
              <div>
                <p className="text-lg text-gray-500">
                  125 [ 8 ]
                </p>
              </div>
              <hr className="border" />
              <div className="flex self-center gap-3">
                <div><Image
                  src="/icons/facebook.svg"
                  alt=""
                  width={20}
                  height={20}
                /></div>
                <div><Image
                  src="/icons/github.svg"
                  alt=""
                  width={20}
                  height={20}
                /></div>
                <div><Image
                  src="/icons/twitter.svg"
                  alt=""
                  width={20}
                  height={20}
                /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-[70%] pt-10">
        <div>
          <h3 className="text-xl font-bold text-gray-500">Comments</h3>
        </div>
        <div className="px-6 py-3 mt-3 border rounded-md shadow-xl w-[100%]">
          <div className=''>
            <input className='border rounded-lg p-2.5 w-[100%] text-gray-900 text-sm focus:ring-blue-500 focus:border-primary' type='text' placeholder='Type here your wise suggestion' />
          </div>
          <div className="flex justify-end gap-2 pt-3">
            <div><Button>
              <div className="py-[2px]">
                <p className="text-sm font-bold text-white">Cancel</p>
              </div>
            </Button></div>
            <div><Button>
              <div className="flex items-center gap-2">
                <div>
                  <FontAwesomeIcon icon={faComment} color="white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Register</p>
                </div>
              </div>
            </Button></div>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-6 py-3 mt-4 w-[100%] border rounded-md shadow-xl border-l-8 border-l-orange">
          <div className="w-[100%] flex justify-between">
            <div>
              <div className="flex gap-3">
                <div className="w-[100%] h-[100%]">
                  <Image
                    src="/bunny.jpeg"
                    alt=""
                    width={60}
                    height={60}
                    className="rounded-xl "
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div><p className="text-sm font-semibold">
                    @unkind
                  </p></div>
                  <div><p className="text-[8px] font-normal">
                    12 November 2020
                  </p></div>
                </div>
              </div>
            </div>
            <div className="flex items-center"><Image
              src="/ellipsis-vertical-solid.svg"
              alt=""
              width={5}
              height={5}
            /></div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare rutrum amet, a nunc mi lacinia
                in iaculis. Pharetra ut integer nibh urna. Placerat ut adipiscing nulla lectus vulputate massa,
                scelerisque. Netus nisl nulla placerat dignissim ipsum arcu.</p>
            </div>
            <div className="py-4 pl-5 text-black bg-gray-200" style={{ whiteSpace: 'pre-line' }}>
              {`package main
            `}
            </div>
            <div>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <hr className="border" />
            <div className="flex justify-between">
              <div className="flex gap-3">
                <div><FontAwesomeIcon icon={faThumbsUp} /><span className="pl-1 text-xs">12</span></div>
                <div><FontAwesomeIcon icon={faThumbsDown} /><span className="pl-1 text-xs">3</span></div>
              </div>
              <div className="flex gap-3">
                <div className="text-blue-500"><FontAwesomeIcon icon={faAngleUp} /><span className="pl-1 text-xs">Hide All Replies (2)</span></div>
                <div className="text-blue-500"><FontAwesomeIcon icon={faReply} /><span className="pl-1 text-xs">Reply</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-16">
          <div className="flex flex-col gap-3 px-6 py-3 mt-4 w-[100%] border rounded-md shadow-xl border-l-[12px] border-l-blue-300">
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-sm"><strong>@unkind</strong>, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare rutrum amet,
                  a nunc mi lacinia in iaculis. Pharetra ut integer nibh urna.</p>
              </div>
              <hr className="border" />
              <div className="flex justify-between">
                <div><span className="pl-1 text-xs text-gray-500">by @lazyReplyer</span></div>
                <div className="text-blue-500"><FontAwesomeIcon icon={faReply} /><span className="pl-1 text-xs">Reply</span></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 px-6 py-3 mt-4 w-[100%] border rounded-md shadow-xl border-l-[12px] border-l-blue-300">
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-sm"><strong>@lazyReplyer</strong>, Thanks!</p>
              </div>
              <hr className="border" />
              <div className="flex justify-between">
                <div><span className="pl-1 text-xs text-gray-500">by @unkind</span></div>
                <div className="text-blue-500"><FontAwesomeIcon icon={faReply} /><span className="pl-1 text-xs">Reply</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-6 py-3 mt-4 w-[100%] border rounded-md shadow-xl border-l-8 border-l-orange">
          <div className="w-[100%] flex justify-between">
            <div>
              <div className="flex gap-3">
                <div className="w-[100%] h-[100%]">
                  <Image
                    src="/bunny.jpeg"
                    alt=""
                    width={60}
                    height={60}
                    className="rounded-xl "
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div><p className="text-sm font-semibold">
                    @morgenshtern
                  </p></div>
                  <div><p className="text-[8px] font-normal">
                    12 November 2020
                  </p></div>
                </div>
              </div>
            </div>
            <div className="flex items-center"><Image
              src="/ellipsis-vertical-solid.svg"
              alt=""
              width={5}
              height={5}
            /></div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare rutrum amet, a nunc mi lacinia
                in iaculis. Pharetra ut integer nibh urna. Placerat ut adipiscing nulla lectus vulputate massa,
                scelerisque. Netus nisl nulla placerat dignissim ipsum arcu.</p>
            </div>
            <hr className="border" />
            <div className="flex justify-between">
              <div className="flex gap-3">
                <div><FontAwesomeIcon icon={faThumbsUp} /><span className="pl-1 text-xs">12</span></div>
                <div><FontAwesomeIcon icon={faThumbsDown} /><span className="pl-1 text-xs">3</span></div>
              </div>
              <div className="flex gap-3">
                <div className="text-blue-500"><FontAwesomeIcon icon={faAngleUp} /><span className="pl-1 text-xs">Hide All Replies (2)</span></div>
                <div className="text-blue-500"><FontAwesomeIcon icon={faReply} /><span className="pl-1 text-xs">Reply</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-16">
          <div className="flex flex-col gap-3 px-6 py-3 mt-4 w-[100%] border rounded-md shadow-xl border-l-[12px] border-l-blue-300">
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-sm"><strong>@unkind</strong>, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare rutrum amet,
                  a nunc mi lacinia in iaculis. Pharetra ut integer nibh urna.</p>
              </div>
              <hr className="border" />
              <div className="flex justify-between">
                <div><span className="pl-1 text-xs text-gray-500">by @lazyReplyer</span></div>
                <div className="text-blue-500"><FontAwesomeIcon icon={faReply} /><span className="pl-1 text-xs">Reply</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-6 py-3 mt-4 w-[100%] border rounded-md shadow-xl border-l-8 border-l-orange">
          <div className="w-[100%] flex justify-between">
            <div>
              <div className="flex gap-3">
                <div className="w-[100%] h-[100%]">
                  <Image
                    src="/bunny.jpeg"
                    alt=""
                    width={60}
                    height={60}
                    className="rounded-xl "
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div><p className="text-sm font-semibold">
                    @kizaru
                  </p></div>
                  <div><p className="text-[8px] font-normal">
                    12 November 2020
                  </p></div>
                </div>
              </div>
            </div>
            <div className="flex items-center"><Image
              src="/ellipsis-vertical-solid.svg"
              alt=""
              width={5}
              height={5}
            /></div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-sm">Mi ac id faucibus laoreet. Nulla quis in interdum imperdiet. Lacus mollis massa netus.</p>
            </div>
            <hr className="border" />
            <div className="flex justify-between">
              <div className="flex gap-3">
                <div><FontAwesomeIcon icon={faThumbsUp} /><span className="pl-1 text-xs">12</span></div>
                <div><FontAwesomeIcon icon={faThumbsDown} /><span className="pl-1 text-xs">3</span></div>
              </div>
              <div className="flex gap-3">
                <div className="text-blue-500"><FontAwesomeIcon icon={faAngleUp} /><span className="pl-1 text-xs">Hide All Replies (2)</span></div>
                <div className="text-blue-500"><FontAwesomeIcon icon={faReply} /><span className="pl-1 text-xs">Reply</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
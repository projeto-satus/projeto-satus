interface Props {
  image: string;
  excerpt: string;
  name: string;
  role: string;
  githubUrl: string;
  linkedinUrl: string;
  websiteUrl: string;
}

export function TeamMember({
  image,
  excerpt,
  name,
  role,
  githubUrl,
  linkedinUrl,
  websiteUrl,
}: Props) {
  return (
    <div className="">
      <div className="max-w-xl">
        <div className="md:m-4 mb-4 block rounded-lg bg-slate-100 md:bg-white p-6 shadow-sm md:hover:scale-110 transition duration-300 md:hover:bg-slate-300 dark:bg-neutral-800 dark:shadow-black/20">
          <div className="sm:flex sm:flex-row">
            <div className="mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 lg:mb-0">
              <div
                className="w-32 h-32 rounded shadow-md dark:shadow-black/30"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                &nbsp;
              </div>
            </div>
            <div className="sm:ml-6 text-left">
              <p className="mb-6 font-light text-neutral-500 dark:text-neutral-300">
                {excerpt}
              </p>
              <p className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                {name}
              </p>
              <p className="mb-0 font-semibold text-sm text-[#ef484d] dark:text-neutral-400">
                {role}
              </p>

              <div className="flex mt-6 justify-between items-center">
                <div className="flex gap-7 items-center">
                  <a href="#">
                    <svg
                      className="w-7 h-7 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      className="w-7 h-7 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 15 15"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                        clipRule="evenodd"
                      />
                      <path d="M3 5.012H0V15h3V5.012Z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      className="w-7 h-7 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z" />
                    </svg>
                  </a>
                </div>

                <div>
                  <a href="#" target="blank">
                    <svg
                      className="w-7 h-7 text-[#ef484d] dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import octocat from '/images/hula_loop_octodex03.gif';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer class="text-gray-600 mx-4 body-font">
        <div class="px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex flex-col sm:flex-row title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src={octocat} class="w-auto h-16 text-white rounded-full" />
            <span class="text-xl">Contributors</span>
          </a>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2022 Hacktober Contributors —
            <a
              href="https://hacktoberfest.com"
              class="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @hacktoberfest
            </a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://github.com/Buddhad/contributors22"
              target="_blank"
              className="text-gray-500 cursor-pointer"
            >
              <BsGithub className="h-6 w-6" />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

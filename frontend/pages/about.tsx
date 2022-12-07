import PageHeading from '../components/PageHeading'

export default function AboutPage() {
  return (
    <div className="flex flex-col laptop:max-w-[60%] gap-6 m-auto">
      <PageHeading>About</PageHeading>
      <div className="flex flex-row gap-6">
        <div className="mb-auto basis-1/2 mobile:p-2 tablet:p-6  bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
          <h5 className="mb-2 laptop:text-2xl tablet:text-lg mobile:text-tiny font-bold tracking-tight text-gray-900">
            Title
          </h5>
          <p className="font-normal text-gray-700 laptop:text-base tablet:text-tiny mobile:text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="mb-auto basis-1/2 mobile:p-2 tablet:p-6  bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h5 className="mb-2 laptop:text-2xl tablet:text-lg mobile:text-tiny font-bold tracking-tight text-gray-900">
            Title
          </h5>
          <p className="font-normal text-gray-700 laptop:text-base tablet:text-tiny mobile:text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-6">
        <div className="mb-auto basis-1/2 mobile:p-2 tablet:p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h5 className="mb-2 laptop:text-2xl tablet:text-lg mobile:text-tiny font-bold tracking-tight text-gray-900">
            Title
          </h5>
          <p className="font-normal text-gray-700 laptop:text-base tablet:text-tiny mobile:text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="mb-auto basis-1/2 mobile:p-2 tablet:p-6  bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h5 className="mb-2 laptop:text-2xl tablet:text-lg mobile:text-tiny font-bold tracking-tight text-gray-900">
            Title
          </h5>
          <p className="font-normal text-gray-700 laptop:text-base tablet:text-tiny mobile:text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  )
}

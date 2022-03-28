import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import {
  BookmarkIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';

import HeaderItem from './HeaderItem';
import SearchModal from './SearchModal';

const Header = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const router = useRouter();
  return (
    <Fragment>
      <header className="mb-0 mt-5 flex h-auto flex-col items-center justify-between sm:flex-row">
        <div className="flex max-w-2xl flex-grow justify-evenly">
          <HeaderItem
            title="Home"
            Icon={HomeIcon}
            onClick={() => router.push(`/`)}
          />
          <HeaderItem
            title="Trending"
            Icon={LightningBoltIcon}
            onClick={() => router.push(`/?genre=fetchTrending`)}
          />
          <HeaderItem
            title="Airing Now"
            Icon={VideoCameraIcon}
            onClick={() => router.push(`/?genre=fetchAiring`)}
          />
          <HeaderItem
            title="Upcoming"
            Icon={BookmarkIcon}
            onClick={() => router.push(`/?genre=fetchUpcoming`)}
          />
          <HeaderItem
            title="Search"
            Icon={SearchIcon}
            onClick={() => setDisplayModal(true)}
          />
          <HeaderItem title="Account" Icon={UserIcon} />
        </div>
        <Link href="/">
          <Image
            src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
            width={150}
            height={75}
            className="cursor-pointer object-contain"
          />
        </Link>
      </header>
      {displayModal && (
        <SearchModal
          showModal={displayModal}
          setShowModal={setDisplayModal}
        />
      )}
    </Fragment>
  );
};

export default Header;

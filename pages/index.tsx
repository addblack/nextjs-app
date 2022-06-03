import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import { Button, Heading, Paragraph, Tag, Rating, Input, Textarea } from '../components';
import { withLayout } from '../Layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import Link from 'next/link';

function Home({menu}: HomeProps): JSX.Element {
  const [rating, setRating] = React.useState<number>(4);

  return (
    <>
      <Heading tag='h1'>Text</Heading>
      <Button appearance='primary' className='test' arrow='right'>Test</Button>
      <Button appearance='secondary' arrow='down'>Test</Button>

        <Link href='/search'>
          <Button appearance='secondary' arrow='down'>Search</Button>
        </Link>

      <Paragraph>Hey</Paragraph>
      <Paragraph size='big'>Wow</Paragraph>
      <Paragraph size='small'>mi</Paragraph>

      <Tag color='primary' size='l'>Hello</Tag>
      <Tag color='green' size='s' link='test'>Hello</Tag>
      <Tag color='grey' size='s' link='test'>Hello</Tag>

      <Rating rating={rating} isEditable setRating={setRating}/>
      <Input placeholder='Test'/>
      <Textarea rows={10}/>
    </>
  );
}


export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number
}
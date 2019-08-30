import React from 'react';
import Head from 'next/head'
import TopTitle from '../components/Toptitle'
import TopLead from '../components/TopLead'
import { Flex, Text, Box, Card } from 'rebass'
import { ChevronsRight } from 'react-feather'

const blogTitleTop = 'ウバ活する | About'
const blogTitle = 'ウバ活する'
const blogTitleLead = 'Ubereatsの配達で気づいた事をお届けします。'

export default function About() {
  return (
    <div>
        <Head>
          <title>{blogTitleTop}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <TopTitle>{blogTitle}</TopTitle>
        <TopLead>{blogTitleLead}</TopLead>
        <Flex alignItems="center" justifyContent="center" py={3} my={2}>
          <Box px={4} mx={2}>
            <Text as="p" fontWeight="bold" fontSize="4" py={3} color="rgb(69, 66, 65)">
              <ChevronsRight  size='20' color='red'/>このウェブログについて</Text>
            <Box mx="auto">
              <Text as="div" lineHeight={1.25} color="rgb(69, 66, 65)">
                <Text as="p">はじめまして、Ryoと申します。</Text>
                <Text as="p" mb={3}>本サイトにご訪問いただき、ありがとうございます。</Text>
                <Text as="p">このウェブログはUbereatsの配達員をする中で気が付いた「配達に役に立つ情報」をまとめるために作成しました。</Text>
                <Text as="p">意見やご感想などがありましたら、Twitterの@ryosuberまでにツイートもしくはDMをいただけると幸いです。</Text>
                <Text as="p">よろしくお願い致します。</Text>
              </Text>
            </Box>
          </Box>
        </Flex>
    </div>
  );
}
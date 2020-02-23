import { FirebaseChecker, CheckerDTO } from '../../interfaces/Checker';

export const testDataAsCheckerDTO = () =>
  checkersTestData.map((data, index) => {
    return {
      amount: data.amount,
      created: data.created,
      id: `${index}`,
    } as CheckerDTO;
  });

export const checkersTestData: FirebaseChecker[] = [
  {
    amount: 101,
    created: '2017-01-14 13:33:30',
  },
  {
    amount: 98,
    created: '2017-01-15 12:00:33',
  },
  {
    amount: 88,
    created: '2017-01-16 12:00:42',
  },
  {
    amount: 137,
    created: '2017-01-17 12:00:40',
  },
  {
    amount: 104,
    created: '2017-01-18 12:00:15',
  },
  {
    amount: 93,
    created: '2017-01-19 12:00:12',
  },
  {
    amount: 94,
    created: '2017-01-20 12:00:55',
  },
  {
    amount: 108,
    created: '2017-01-21 12:00:34',
  },
  {
    amount: 86,
    created: '2017-01-22 12:00:28',
  },
  {
    amount: 132,
    created: '2017-01-23 12:00:23',
  },
  {
    amount: 125,
    created: '2017-01-24 12:00:50',
  },
  {
    amount: 147,
    created: '2017-01-25 12:00:45',
  },
  {
    amount: 116,
    created: '2017-01-26 12:00:48',
  },
  {
    amount: 123,
    created: '2017-01-27 12:00:54',
  },
  {
    amount: 117,
    created: '2017-01-28 12:00:19',
  },
  {
    amount: 96,
    created: '2017-01-29 12:00:52',
  },
  {
    amount: 105,
    created: '2017-01-30 12:00:16',
  },
  {
    amount: 113,
    created: '2017-01-31 12:00:07',
  },
  {
    amount: 130,
    created: '2017-02-01 12:00:44',
  },
  {
    amount: 128,
    created: '2017-02-02 12:00:22',
  },
  {
    amount: 111,
    created: '2017-02-03 12:00:42',
  },
  {
    amount: 108,
    created: '2017-02-04 12:00:35',
  },
  {
    amount: 105,
    created: '2017-02-05 12:00:28',
  },
  {
    amount: 90,
    created: '2017-02-06 12:00:57',
  },
  {
    amount: 108,
    created: '2017-02-07 12:00:34',
  },
  {
    amount: 116,
    created: '2017-02-08 12:00:53',
  },
  {
    amount: 102,
    created: '2017-02-09 12:00:34',
  },
  {
    amount: 105,
    created: '2017-02-10 12:00:14',
  },
  {
    amount: 107,
    created: '2017-02-11 12:00:18',
  },
  {
    amount: 108,
    created: '2017-02-12 12:00:43',
  },
  {
    amount: 89,
    created: '2017-02-13 12:00:21',
  },
  {
    amount: 98,
    created: '2017-02-14 12:00:25',
  },
  {
    amount: 95,
    created: '2017-02-15 12:00:38',
  },
  {
    amount: 94,
    created: '2017-02-16 12:00:50',
  },
  {
    amount: 107,
    created: '2017-02-17 12:00:36',
  },
  {
    amount: 103,
    created: '2017-02-18 12:00:23',
  },
  {
    amount: 106,
    created: '2017-02-19 12:00:32',
  },
  {
    amount: 123,
    created: '2017-02-20 12:00:30',
  },
  {
    amount: 114,
    created: '2017-02-21 12:00:52',
  },
  {
    amount: 98,
    created: '2017-02-22 12:00:35',
  },
  {
    amount: 116,
    created: '2017-02-23 12:00:51',
  },
  {
    amount: 103,
    created: '2017-02-24 12:00:23',
  },
  {
    amount: 102,
    created: '2017-02-25 12:00:44',
  },
  {
    amount: 122,
    created: '2017-02-26 12:00:57',
  },
  {
    amount: 117,
    created: '2017-02-27 12:00:47',
  },
  {
    amount: 119,
    created: '2017-02-28 12:00:42',
  },
  {
    amount: 121,
    created: '2017-03-01 12:00:54',
  },
  {
    amount: 139,
    created: '2017-03-02 12:00:26',
  },
  {
    amount: 117,
    created: '2017-03-03 12:00:46',
  },
  {
    amount: 97,
    created: '2017-03-04 12:00:38',
  },
  {
    amount: 107,
    created: '2017-03-05 12:00:24',
  },
  {
    amount: 108,
    created: '2017-03-06 12:00:49',
  },
  {
    amount: 114,
    created: '2017-03-07 12:00:36',
  },
  {
    amount: 103,
    created: '2017-03-08 12:00:29',
  },
  {
    amount: 101,
    created: '2017-03-09 12:00:52',
  },
  {
    amount: 117,
    created: '2017-03-10 12:00:43',
  },
  {
    amount: 121,
    created: '2017-03-11 12:00:18',
  },
  {
    amount: 134,
    created: '2017-03-12 12:00:52',
  },
  {
    amount: 121,
    created: '2017-03-13 12:00:44',
  },
  {
    amount: 121,
    created: '2017-03-14 12:00:29',
  },
  {
    amount: 133,
    created: '2017-03-15 12:00:32',
  },
  {
    amount: 117,
    created: '2017-03-16 12:00:44',
  },
  {
    amount: 120,
    created: '2017-03-17 12:00:32',
  },
  {
    amount: 111,
    created: '2017-03-18 12:00:16',
  },
  {
    amount: 106,
    created: '2017-03-19 12:00:52',
  },
  {
    amount: 119,
    created: '2017-03-20 12:00:46',
  },
  {
    amount: 133,
    created: '2017-03-21 12:00:44',
  },
  {
    amount: 121,
    created: '2017-03-22 12:00:34',
  },
  {
    amount: 124,
    created: '2017-03-23 12:00:11',
  },
  {
    amount: 105,
    created: '2017-03-24 12:00:44',
  },
  {
    amount: 125,
    created: '2017-03-25 12:00:19',
  },
  {
    amount: 103,
    created: '2017-03-26 12:00:21',
  },
  {
    amount: 97,
    created: '2017-03-27 12:00:27',
  },
  {
    amount: 106,
    created: '2017-03-28 12:00:22',
  },
  {
    amount: 111,
    created: '2017-03-29 12:00:14',
  },
  {
    amount: 115,
    created: '2017-03-30 12:00:11',
  },
  {
    amount: 112,
    created: '2017-03-31 12:00:14',
  },
  {
    amount: 125,
    created: '2017-04-01 12:00:22',
  },
  {
    amount: 146,
    created: '2017-04-02 12:00:27',
  },
  {
    amount: 112,
    created: '2017-04-03 12:00:22',
  },
  {
    amount: 105,
    created: '2017-04-04 12:00:55',
  },
  {
    amount: 113,
    created: '2017-04-05 12:00:44',
  },
  {
    amount: 111,
    created: '2017-04-06 12:00:43',
  },
  {
    amount: 111,
    created: '2017-04-07 12:01:14',
  },
  {
    amount: 122,
    created: '2017-04-08 12:00:14',
  },
  {
    amount: 118,
    created: '2017-04-09 12:00:34',
  },
  {
    amount: 113,
    created: '2017-04-10 12:00:28',
  },
  {
    amount: 127,
    created: '2017-04-11 12:00:32',
  },
  {
    amount: 119,
    created: '2017-04-12 12:00:17',
  },
  {
    amount: 118,
    created: '2017-04-13 12:00:37',
  },
  {
    amount: 133,
    created: '2017-04-14 12:00:54',
  },
  {
    amount: 104,
    created: '2017-04-15 12:00:39',
  },
  {
    amount: 98,
    created: '2017-04-16 12:00:38',
  },
  {
    amount: 133,
    created: '2017-04-17 12:01:00',
  },
  {
    amount: 114,
    created: '2017-04-18 12:00:23',
  },
  {
    amount: 132,
    created: '2017-04-19 12:00:58',
  },
  {
    amount: 92,
    created: '2017-04-20 12:00:48',
  },
  {
    amount: 105,
    created: '2017-04-21 12:00:33',
  },
  {
    amount: 124,
    created: '2017-04-22 12:00:47',
  },
  {
    amount: 111,
    created: '2017-04-23 12:00:21',
  },
  {
    amount: 106,
    created: '2017-04-24 12:00:19',
  },
  {
    amount: 110,
    created: '2017-04-25 12:00:44',
  },
  {
    amount: 146,
    created: '2017-04-26 12:00:22',
  },
  {
    amount: 136,
    created: '2017-04-27 12:00:41',
  },
  {
    amount: 127,
    created: '2017-04-28 12:01:00',
  },
  {
    amount: 145,
    created: '2017-04-29 12:00:51',
  },
  {
    amount: 126,
    created: '2017-04-30 12:00:54',
  },
  {
    amount: 112,
    created: '2017-05-01 12:01:09',
  },
  {
    amount: 105,
    created: '2017-05-02 12:00:26',
  },
  {
    amount: 114,
    created: '2017-05-03 12:00:20',
  },
  {
    amount: 106,
    created: '2017-05-04 12:00:18',
  },
  {
    amount: 116,
    created: '2017-05-05 12:00:39',
  },
  {
    amount: 144,
    created: '2017-05-06 12:00:42',
  },
  {
    amount: 134,
    created: '2017-05-07 12:00:21',
  },
  {
    amount: 124,
    created: '2017-05-08 12:00:24',
  },
  {
    amount: 134,
    created: '2017-05-09 12:00:27',
  },
  {
    amount: 97,
    created: '2017-05-10 12:00:43',
  },
  {
    amount: 99,
    created: '2017-05-11 12:00:26',
  },
  {
    amount: 99,
    created: '2017-05-12 12:00:46',
  },
  {
    amount: 102,
    created: '2017-05-13 12:00:16',
  },
  {
    amount: 92,
    created: '2017-05-14 12:00:25',
  },
  {
    amount: 100,
    created: '2017-05-15 12:00:39',
  },
  {
    amount: 121,
    created: '2017-05-16 12:00:48',
  },
  {
    amount: 130,
    created: '2017-05-17 12:00:28',
  },
  {
    amount: 114,
    created: '2017-05-18 12:00:26',
  },
  {
    amount: 131,
    created: '2017-05-19 12:00:17',
  },
  {
    amount: 96,
    created: '2017-05-20 12:00:35',
  },
  {
    amount: 112,
    created: '2017-05-21 12:00:44',
  },
  {
    amount: 108,
    created: '2017-05-22 12:00:29',
  },
  {
    amount: 123,
    created: '2017-05-23 12:00:41',
  },
  {
    amount: 130,
    created: '2017-05-24 12:00:49',
  },
  {
    amount: 121,
    created: '2017-05-25 12:00:43',
  },
  {
    amount: 135,
    created: '2017-05-26 12:00:25',
  },
  {
    amount: 144,
    created: '2017-05-27 12:00:35',
  },
  {
    amount: 149,
    created: '2017-05-28 12:00:48',
  },
  {
    amount: 121,
    created: '2017-05-29 12:00:48',
  },
  {
    amount: 116,
    created: '2017-05-30 12:00:43',
  },
  {
    amount: 118,
    created: '2017-05-31 12:00:20',
  },
  {
    amount: 107,
    created: '2017-06-01 12:00:49',
  },
  {
    amount: 142,
    created: '2017-06-02 12:01:00',
  },
  {
    amount: 128,
    created: '2017-06-03 12:00:23',
  },
  {
    amount: 109,
    created: '2017-06-04 12:00:30',
  },
  {
    amount: 140,
    created: '2017-06-05 12:00:45',
  },
  {
    amount: 146,
    created: '2017-06-06 12:01:23',
  },
  {
    amount: 134,
    created: '2017-06-07 12:00:53',
  },
  {
    amount: 120,
    created: '2017-06-08 12:00:43',
  },
  {
    amount: 150,
    created: '2017-06-09 12:00:34',
  },
  {
    amount: 147,
    created: '2017-06-10 12:00:48',
  },
  {
    amount: 144,
    created: '2017-06-11 12:00:50',
  },
  {
    amount: 147,
    created: '2017-06-12 12:00:36',
  },
  {
    amount: 153,
    created: '2017-06-13 12:00:19',
  },
  {
    amount: 166,
    created: '2017-06-14 12:00:41',
  },
  {
    amount: 150,
    created: '2017-06-15 12:00:24',
  },
  {
    amount: 145,
    created: '2017-06-16 12:00:55',
  },
  {
    amount: 116,
    created: '2017-06-17 12:00:57',
  },
  {
    amount: 130,
    created: '2017-06-18 12:00:49',
  },
  {
    amount: 122,
    created: '2017-06-19 12:00:58',
  },
  {
    amount: 115,
    created: '2017-06-20 12:00:27',
  },
  {
    amount: 108,
    created: '2017-06-21 12:00:48',
  },
  {
    amount: 129,
    created: '2017-06-22 12:00:33',
  },
  {
    amount: 154,
    created: '2017-06-23 12:00:22',
  },
  {
    amount: 146,
    created: '2017-06-24 12:00:51',
  },
  {
    amount: 135,
    created: '2017-06-25 12:00:22',
  },
  {
    amount: 128,
    created: '2017-06-26 12:00:24',
  },
  {
    amount: 129,
    created: '2017-06-27 12:00:44',
  },
  {
    amount: 101,
    created: '2017-06-28 12:00:32',
  },
  {
    amount: 113,
    created: '2017-06-29 12:00:47',
  },
  {
    amount: 119,
    created: '2017-06-30 12:00:21',
  },
  {
    amount: 148,
    created: '2017-07-01 12:00:54',
  },
  {
    amount: 121,
    created: '2017-07-02 12:00:53',
  },
  {
    amount: 144,
    created: '2017-07-03 12:00:27',
  },
  {
    amount: 139,
    created: '2017-07-04 12:00:55',
  },
  {
    amount: 117,
    created: '2017-07-05 12:00:43',
  },
  {
    amount: 125,
    created: '2017-07-06 12:00:33',
  },
  {
    amount: 141,
    created: '2017-07-07 12:00:49',
  },
  {
    amount: 124,
    created: '2017-07-08 12:00:48',
  },
  {
    amount: 115,
    created: '2017-07-09 12:00:50',
  },
  {
    amount: 115,
    created: '2017-07-10 12:00:48',
  },
  {
    amount: 148,
    created: '2017-07-11 12:00:49',
  },
  {
    amount: 151,
    created: '2017-07-12 12:00:48',
  },
  {
    amount: 163,
    created: '2017-07-13 12:01:22',
  },
  {
    amount: 133,
    created: '2017-07-14 12:00:50',
  },
  {
    amount: 118,
    created: '2017-07-15 12:00:20',
  },
  {
    amount: 119,
    created: '2017-07-16 12:00:27',
  },
  {
    amount: 88,
    created: '2017-07-17 12:00:46',
  },
  {
    amount: 103,
    created: '2017-07-18 12:00:34',
  },
  {
    amount: 115,
    created: '2017-07-19 12:00:42',
  },
  {
    amount: 128,
    created: '2017-07-20 12:00:53',
  },
  {
    amount: 161,
    created: '2017-07-21 12:00:47',
  },
  {
    amount: 143,
    created: '2017-07-22 12:00:19',
  },
  {
    amount: 152,
    created: '2017-07-23 12:00:34',
  },
  {
    amount: 147,
    created: '2017-07-24 12:00:25',
  },
  {
    amount: 136,
    created: '2017-07-25 12:00:31',
  },
  {
    amount: 124,
    created: '2017-07-26 12:00:52',
  },
  {
    amount: 143,
    created: '2017-07-27 12:00:48',
  },
  {
    amount: 173,
    created: '2017-07-28 12:00:49',
  },
  {
    amount: 166,
    created: '2017-07-29 12:00:46',
  },
  {
    amount: 156,
    created: '2017-07-30 12:00:46',
  },
  {
    amount: 140,
    created: '2017-07-31 12:00:25',
  },
  {
    amount: 158,
    created: '2017-08-01 12:00:38',
  },
  {
    amount: 138,
    created: '2017-08-02 12:00:53',
  },
  {
    amount: 137,
    created: '2017-08-03 12:00:58',
  },
  {
    amount: 127,
    created: '2017-08-04 12:00:46',
  },
  {
    amount: 125,
    created: '2017-08-05 12:00:55',
  },
  {
    amount: 118,
    created: '2017-08-06 12:00:43',
  },
  {
    amount: 146,
    created: '2017-08-07 12:00:22',
  },
  {
    amount: 118,
    created: '2017-08-08 12:00:42',
  },
  {
    amount: 128,
    created: '2017-08-09 12:00:44',
  },
  {
    amount: 128,
    created: '2017-08-10 12:00:49',
  },
  {
    amount: 139,
    created: '2017-08-11 12:00:21',
  },
  {
    amount: 122,
    created: '2017-08-12 12:01:03',
  },
  {
    amount: 132,
    created: '2017-08-13 12:00:45',
  },
  {
    amount: 126,
    created: '2017-08-14 12:00:38',
  },
  {
    amount: 127,
    created: '2017-08-15 12:01:10',
  },
  {
    amount: 125,
    created: '2017-08-16 12:00:38',
  },
  {
    amount: 134,
    created: '2017-08-17 12:00:35',
  },
  {
    amount: 140,
    created: '2017-08-18 12:00:32',
  },
  {
    amount: 150,
    created: '2017-08-19 12:00:33',
  },
  {
    amount: 153,
    created: '2017-08-20 12:00:49',
  },
  {
    amount: 117,
    created: '2017-08-21 12:00:50',
  },
  {
    amount: 104,
    created: '2017-08-22 12:01:30',
  },
  {
    amount: 114,
    created: '2017-08-23 12:01:03',
  },
  {
    amount: 99,
    created: '2017-08-24 12:00:47',
  },
  {
    amount: 121,
    created: '2017-08-25 12:00:35',
  },
  {
    amount: 133,
    created: '2017-08-26 12:00:22',
  },
  {
    amount: 123,
    created: '2017-08-27 12:00:44',
  },
  {
    amount: 123,
    created: '2017-08-28 12:00:47',
  },
  {
    amount: 122,
    created: '2017-08-29 12:00:57',
  },
  {
    amount: 120,
    created: '2017-08-30 12:00:46',
  },
  {
    amount: 123,
    created: '2017-08-31 12:00:14',
  },
  {
    amount: 122,
    created: '2017-09-01 12:01:01',
  },
  {
    amount: 116,
    created: '2017-09-02 12:00:46',
  },
  {
    amount: 130,
    created: '2017-09-03 12:00:51',
  },
  {
    amount: 117,
    created: '2017-09-04 12:00:53',
  },
  {
    amount: 91,
    created: '2017-09-05 12:00:54',
  },
  {
    amount: 83,
    created: '2017-09-06 12:00:19',
  },
  {
    amount: 80,
    created: '2017-09-07 12:00:47',
  },
  {
    amount: 81,
    created: '2017-09-08 12:00:32',
  },
  {
    amount: 67,
    created: '2017-09-09 12:00:20',
  },
  {
    amount: 79,
    created: '2017-09-10 12:00:31',
  },
  {
    amount: 71,
    created: '2017-09-11 12:00:34',
  },
  {
    amount: 95,
    created: '2017-09-12 12:00:59',
  },
  {
    amount: 70,
    created: '2017-09-13 12:00:21',
  },
  {
    amount: 78,
    created: '2017-09-14 12:00:25',
  },
  {
    amount: 95,
    created: '2017-09-15 12:01:11',
  },
  {
    amount: 63,
    created: '2017-09-16 12:00:31',
  },
  {
    amount: 78,
    created: '2017-09-17 12:00:32',
  },
  {
    amount: 85,
    created: '2017-09-18 12:00:45',
  },
  {
    amount: 61,
    created: '2017-09-19 12:00:52',
  },
  {
    amount: 82,
    created: '2017-09-20 12:00:43',
  },
  {
    amount: 70,
    created: '2017-09-21 12:00:44',
  },
  {
    amount: 75,
    created: '2017-09-22 12:00:34',
  },
  {
    amount: 70,
    created: '2017-09-23 12:00:58',
  },
  {
    amount: 71,
    created: '2017-09-24 12:00:22',
  },
  {
    amount: 65,
    created: '2017-09-25 12:01:05',
  },
  {
    amount: 78,
    created: '2017-09-26 12:00:27',
  },
  {
    amount: 58,
    created: '2017-09-27 12:00:35',
  },
  {
    amount: 77,
    created: '2017-09-28 12:00:50',
  },
  {
    amount: 73,
    created: '2017-09-29 12:01:00',
  },
  {
    amount: 85,
    created: '2017-09-30 12:00:20',
  },
  {
    amount: 85,
    created: '2017-10-01 12:00:56',
  },
  {
    amount: 75,
    created: '2017-10-02 12:00:33',
  },
  {
    amount: 75,
    created: '2017-10-03 12:00:18',
  },
  {
    amount: 75,
    created: '2017-10-04 12:00:31',
  },
  {
    amount: 63,
    created: '2017-10-05 12:01:04',
  },
  {
    amount: 85,
    created: '2017-10-06 12:00:55',
  },
  {
    amount: 93,
    created: '2017-10-07 12:00:45',
  },
  {
    amount: 77,
    created: '2017-10-08 12:00:36',
  },
  {
    amount: 77,
    created: '2017-10-09 12:00:47',
  },
  {
    amount: 62,
    created: '2017-10-10 12:01:14',
  },
  {
    amount: 74,
    created: '2017-10-11 12:00:48',
  },
  {
    amount: 76,
    created: '2017-10-12 12:00:15',
  },
  {
    amount: 84,
    created: '2017-10-13 12:00:38',
  },
  {
    amount: 81,
    created: '2017-10-14 12:00:37',
  },
  {
    amount: 81,
    created: '2017-10-15 12:00:42',
  },
  {
    amount: 62,
    created: '2017-10-16 12:00:36',
  },
  {
    amount: 58,
    created: '2017-10-17 12:00:54',
  },
  {
    amount: 57,
    created: '2017-10-18 12:00:56',
  },
  {
    amount: 65,
    created: '2017-10-19 12:00:47',
  },
  {
    amount: 68,
    created: '2017-10-20 12:00:55',
  },
  {
    amount: 71,
    created: '2017-10-21 12:00:27',
  },
  {
    amount: 84,
    created: '2017-10-22 12:00:43',
  },
  {
    amount: 66,
    created: '2017-10-23 12:00:36',
  },
  {
    amount: 73,
    created: '2017-10-24 12:00:35',
  },
  {
    amount: 73,
    created: '2017-10-25 12:00:52',
  },
  {
    amount: 55,
    created: '2017-10-26 12:00:44',
  },
  {
    amount: 80,
    created: '2017-10-27 12:00:42',
  },
  {
    amount: 80,
    created: '2017-10-28 12:00:41',
  },
  {
    amount: 70,
    created: '2017-10-29 12:00:53',
  },
  {
    amount: 71,
    created: '2017-10-30 12:00:55',
  },
  {
    amount: 78,
    created: '2017-10-31 12:00:32',
  },
  {
    amount: 85,
    created: '2017-11-01 12:00:20',
  },
  {
    amount: 73,
    created: '2017-11-02 12:00:50',
  },
  {
    amount: 81,
    created: '2017-11-03 12:00:45',
  },
  {
    amount: 85,
    created: '2017-11-04 12:00:35',
  },
  {
    amount: 80,
    created: '2017-11-05 12:00:24',
  },
  {
    amount: 82,
    created: '2017-11-06 12:00:24',
  },
  {
    amount: 77,
    created: '2017-11-07 12:00:12',
  },
  {
    amount: 79,
    created: '2017-11-08 12:00:38',
  },
  {
    amount: 77,
    created: '2017-11-09 12:00:27',
  },
  {
    amount: 88,
    created: '2017-11-10 12:00:45',
  },
  {
    amount: 84,
    created: '2017-11-11 12:00:47',
  },
  {
    amount: 72,
    created: '2017-11-12 12:00:44',
  },
  {
    amount: 77,
    created: '2017-11-13 12:00:53',
  },
  {
    amount: 78,
    created: '2017-11-14 12:00:16',
  },
  {
    amount: 85,
    created: '2017-11-15 12:00:20',
  },
  {
    amount: 87,
    created: '2017-11-16 12:00:41',
  },
  {
    amount: 76,
    created: '2017-11-17 12:01:01',
  },
  {
    amount: 78,
    created: '2017-11-18 12:00:20',
  },
  {
    amount: 84,
    created: '2017-11-19 12:00:24',
  },
  {
    amount: 62,
    created: '2017-11-20 12:00:37',
  },
  {
    amount: 67,
    created: '2017-11-21 12:00:44',
  },
  {
    amount: 66,
    created: '2017-11-22 12:00:36',
  },
  {
    amount: 78,
    created: '2017-11-23 12:00:42',
  },
  {
    amount: 87,
    created: '2017-11-24 12:00:48',
  },
  {
    amount: 86,
    created: '2017-11-25 12:00:43',
  },
  {
    amount: 74,
    created: '2017-11-26 12:00:47',
  },
  {
    amount: 71,
    created: '2017-11-27 12:00:47',
  },
  {
    amount: 74,
    created: '2017-11-28 12:00:44',
  },
  {
    amount: 82,
    created: '2017-11-29 12:00:37',
  },
  {
    amount: 86,
    created: '2017-11-30 12:00:28',
  },
  {
    amount: 105,
    created: '2017-12-01 12:00:21',
  },
  {
    amount: 94,
    created: '2017-12-02 12:00:25',
  },
  {
    amount: 73,
    created: '2017-12-03 12:00:23',
  },
  {
    amount: 74,
    created: '2017-12-04 12:00:45',
  },
  {
    amount: 76,
    created: '2017-12-05 12:00:53',
  },
  {
    amount: 84,
    created: '2017-12-06 12:00:45',
  },
  {
    amount: 68,
    created: '2017-12-07 12:00:23',
  },
  {
    amount: 87,
    created: '2017-12-08 12:00:32',
  },
  {
    amount: 91,
    created: '2017-12-09 12:00:42',
  },
  {
    amount: 91,
    created: '2017-12-10 12:00:36',
  },
  {
    amount: 78,
    created: '2017-12-11 12:01:02',
  },
  {
    amount: 75,
    created: '2017-12-12 12:00:51',
  },
  {
    amount: 100,
    created: '2017-12-13 12:00:41',
  },
  {
    amount: 55,
    created: '2017-12-14 12:00:54',
  },
  {
    amount: 72,
    created: '2017-12-15 12:00:51',
  },
  {
    amount: 85,
    created: '2017-12-16 12:00:36',
  },
  {
    amount: 88,
    created: '2017-12-17 12:00:19',
  },
  {
    amount: 69,
    created: '2017-12-18 12:00:47',
  },
  {
    amount: 85,
    created: '2017-12-19 12:00:43',
  },
  {
    amount: 85,
    created: '2017-12-20 12:00:18',
  },
  {
    amount: 65,
    created: '2017-12-21 12:00:37',
  },
  {
    amount: 94,
    created: '2017-12-22 12:01:16',
  },
  {
    amount: 97,
    created: '2017-12-23 12:00:32',
  },
  {
    amount: 77,
    created: '2017-12-24 12:00:43',
  },
  {
    amount: 81,
    created: '2017-12-25 12:00:41',
  },
  {
    amount: 81,
    created: '2017-12-26 12:00:55',
  },
  {
    amount: 84,
    created: '2017-12-27 12:00:51',
  },
  {
    amount: 105,
    created: '2017-12-28 12:00:46',
  },
  {
    amount: 75,
    created: '2017-12-29 12:00:47',
  },
  {
    amount: 87,
    created: '2017-12-30 12:01:06',
  },
  {
    amount: 98,
    created: '2017-12-31 12:01:00',
  },
  {
    amount: 91,
    created: '2018-01-01 12:00:25',
  },
  {
    amount: 82,
    created: '2018-01-02 12:00:50',
  },
  {
    amount: 99,
    created: '2018-01-03 12:00:53',
  },
  {
    amount: 79,
    created: '2018-01-04 12:01:01',
  },
  {
    amount: 89,
    created: '2018-01-05 12:00:49',
  },
  {
    amount: 100,
    created: '2018-01-06 12:01:20',
  },
  {
    amount: 98,
    created: '2018-01-07 12:01:18',
  },
  {
    amount: 78,
    created: '2018-01-08 12:01:07',
  },
  {
    amount: 81,
    created: '2018-01-09 12:00:27',
  },
  {
    amount: 78,
    created: '2018-01-10 12:00:48',
  },
  {
    amount: 74,
    created: '2018-01-11 12:00:52',
  },
  {
    amount: 73,
    created: '2018-01-12 12:00:48',
  },
  {
    amount: 91,
    created: '2018-01-13 12:01:03',
  },
  {
    amount: 84,
    created: '2018-01-14 12:00:53',
  },
  {
    amount: 96,
    created: '2018-01-15 12:00:56',
  },
  {
    amount: 87,
    created: '2018-01-16 12:00:51',
  },
  {
    amount: 84,
    created: '2018-01-17 12:01:00',
  },
  {
    amount: 74,
    created: '2018-01-18 12:00:40',
  },
  {
    amount: 80,
    created: '2018-01-19 12:00:53',
  },
  {
    amount: 93,
    created: '2018-01-20 12:00:37',
  },
  {
    amount: 94,
    created: '2018-01-21 12:00:58',
  },
  {
    amount: 74,
    created: '2018-01-22 12:07:49',
  },
  {
    amount: 79,
    created: '2018-01-23 12:00:56',
  },
  {
    amount: 82,
    created: '2018-01-24 12:00:55',
  },
  {
    amount: 80,
    created: '2018-01-25 12:01:01',
  },
  {
    amount: 82,
    created: '2018-01-26 12:00:52',
  },
  {
    amount: 70,
    created: '2018-01-27 12:00:40',
  },
  {
    amount: 72,
    created: '2018-01-28 12:00:30',
  },
  {
    amount: 60,
    created: '2018-01-29 12:00:26',
  },
  {
    amount: 70,
    created: '2018-01-30 12:00:33',
  },
  {
    amount: 72,
    created: '2018-01-31 12:00:19',
  },
  {
    amount: 97,
    created: '2018-02-01 12:00:39',
  },
  {
    amount: 80,
    created: '2018-02-02 12:00:49',
  },
  {
    amount: 90,
    created: '2018-02-03 12:00:37',
  },
  {
    amount: 79,
    created: '2018-02-04 12:00:33',
  },
  {
    amount: 69,
    created: '2018-02-05 12:00:53',
  },
  {
    amount: 76,
    created: '2018-02-06 12:00:05',
  },
  {
    amount: 78,
    created: '2018-02-07 12:01:06',
  },
  {
    amount: 69,
    created: '2018-02-08 12:00:59',
  },
  {
    amount: 78,
    created: '2018-02-09 12:00:50',
  },
  {
    amount: 84,
    created: '2018-02-10 12:00:22',
  },
  {
    amount: 75,
    created: '2018-02-11 12:01:09',
  },
  {
    amount: 70,
    created: '2018-02-12 12:00:25',
  },
  {
    amount: 90,
    created: '2018-02-13 12:00:48',
  },
  {
    amount: 68,
    created: '2018-02-14 12:00:51',
  },
  {
    amount: 72,
    created: '2018-02-15 12:01:11',
  },
  {
    amount: 73,
    created: '2018-02-16 12:01:09',
  },
  {
    amount: 94,
    created: '2018-02-17 12:01:02',
  },
  {
    amount: 76,
    created: '2018-02-18 12:00:48',
  },
  {
    amount: 83,
    created: '2018-02-19 12:01:06',
  },
  {
    amount: 77,
    created: '2018-02-20 12:01:12',
  },
  {
    amount: 89,
    created: '2018-02-21 12:00:55',
  },
  {
    amount: 77,
    created: '2018-02-22 12:00:34',
  },
  {
    amount: 62,
    created: '2018-02-23 12:01:10',
  },
  {
    amount: 74,
    created: '2018-02-24 12:00:38',
  },
  {
    amount: 58,
    created: '2018-02-25 12:01:03',
  },
  {
    amount: 105,
    created: '2018-02-26 12:00:31',
  },
  {
    amount: 96,
    created: '2018-02-27 12:00:43',
  },
  {
    amount: 108,
    created: '2018-02-28 12:00:26',
  },
  {
    amount: 114,
    created: '2018-03-01 12:01:10',
  },
  {
    amount: 113,
    created: '2018-03-02 12:01:05',
  },
  {
    amount: 140,
    created: '2018-03-03 12:01:32',
  },
  {
    amount: 117,
    created: '2018-03-04 12:00:15',
  },
  {
    amount: 114,
    created: '2018-03-05 12:00:33',
  },
  {
    amount: 101,
    created: '2018-03-06 12:01:33',
  },
  {
    amount: 130,
    created: '2018-03-07 12:01:04',
  },
  {
    amount: 87,
    created: '2018-03-08 12:08:15',
  },
  {
    amount: 107,
    created: '2018-03-09 12:00:19',
  },
  {
    amount: 111,
    created: '2018-03-10 12:01:00',
  },
  {
    amount: 112,
    created: '2018-03-11 12:00:13',
  },
  {
    amount: 107,
    created: '2018-03-12 12:00:05',
  },
  {
    amount: 113,
    created: '2018-03-13 12:01:22',
  },
  {
    amount: 100,
    created: '2018-03-14 12:00:15',
  },
  {
    amount: 95,
    created: '2018-03-15 12:01:05',
  },
  {
    amount: 101,
    created: '2018-03-16 12:01:09',
  },
  {
    amount: 112,
    created: '2018-03-17 12:01:24',
  },
  {
    amount: 102,
    created: '2018-03-18 12:01:25',
  },
  {
    amount: 106,
    created: '2018-03-19 12:00:39',
  },
  {
    amount: 110,
    created: '2018-03-20 12:00:20',
  },
  {
    amount: 97,
    created: '2018-03-21 12:00:28',
  },
  {
    amount: 76,
    created: '2018-03-22 12:01:37',
  },
  {
    amount: 88,
    created: '2018-03-23 12:00:12',
  },
  {
    amount: 97,
    created: '2018-03-24 12:00:20',
  },
  {
    amount: 94,
    created: '2018-03-25 12:00:27',
  },
  {
    amount: 106,
    created: '2018-03-26 12:00:37',
  },
  {
    amount: 113,
    created: '2018-03-27 12:00:35',
  },
  {
    amount: 114,
    created: '2018-03-28 12:00:43',
  },
  {
    amount: 106,
    created: '2018-03-29 12:00:26',
  },
  {
    amount: 120,
    created: '2018-03-30 12:00:40',
  },
  {
    amount: 124,
    created: '2018-03-31 12:00:21',
  },
  {
    amount: 119,
    created: '2018-04-01 12:00:56',
  },
  {
    amount: 106,
    created: '2018-04-02 12:00:38',
  },
  {
    amount: 104,
    created: '2018-04-03 12:00:52',
  },
  {
    amount: 101,
    created: '2018-04-04 12:00:43',
  },
  {
    amount: 85,
    created: '2018-04-05 12:01:22',
  },
  {
    amount: 88,
    created: '2018-04-06 12:00:38',
  },
  {
    amount: 124,
    created: '2018-04-07 12:00:20',
  },
  {
    amount: 104,
    created: '2018-04-08 12:00:25',
  },
  {
    amount: 99,
    created: '2018-04-09 12:00:30',
  },
  {
    amount: 105,
    created: '2018-04-10 12:01:28',
  },
  {
    amount: 84,
    created: '2018-04-11 12:00:57',
  },
  {
    amount: 87,
    created: '2018-04-12 12:00:21',
  },
  {
    amount: 122,
    created: '2018-04-13 12:00:33',
  },
  {
    amount: 119,
    created: '2018-04-14 12:01:09',
  },
  {
    amount: 103,
    created: '2018-04-15 12:00:42',
  },
  {
    amount: 93,
    created: '2018-04-16 12:00:17',
  },
  {
    amount: 100,
    created: '2018-04-17 12:00:17',
  },
  {
    amount: 86,
    created: '2018-04-18 12:00:57',
  },
  {
    amount: 89,
    created: '2018-04-19 12:00:22',
  },
  {
    amount: 84,
    created: '2018-04-20 12:00:49',
  },
  {
    amount: 91,
    created: '2018-04-21 12:01:07',
  },
  {
    amount: 105,
    created: '2018-04-22 12:00:51',
  },
  {
    amount: 82,
    created: '2018-04-23 12:00:20',
  },
  {
    amount: 84,
    created: '2018-04-24 12:00:18',
  },
  {
    amount: 108,
    created: '2018-04-25 12:00:44',
  },
  {
    amount: 104,
    created: '2018-04-26 12:00:25',
  },
  {
    amount: 95,
    created: '2018-04-27 12:00:12',
  },
  {
    amount: 120,
    created: '2018-04-28 12:00:23',
  },
  {
    amount: 97,
    created: '2018-04-29 12:00:19',
  },
  {
    amount: 90,
    created: '2018-04-30 12:01:09',
  },
  {
    amount: 96,
    created: '2018-05-01 12:00:15',
  },
  {
    amount: 81,
    created: '2018-05-02 12:00:30',
  },
  {
    amount: 94,
    created: '2018-05-03 12:00:18',
  },
  {
    amount: 108,
    created: '2018-05-04 12:00:12',
  },
  {
    amount: 106,
    created: '2018-05-05 12:01:28',
  },
  {
    amount: 105,
    created: '2018-05-06 12:00:27',
  },
  {
    amount: 112,
    created: '2018-05-07 12:01:11',
  },
  {
    amount: 104,
    created: '2018-05-08 12:01:09',
  },
  {
    amount: 105,
    created: '2018-05-09 12:00:20',
  },
  {
    amount: 99,
    created: '2018-05-10 12:00:36',
  },
  {
    amount: 115,
    created: '2018-05-11 12:01:01',
  },
  {
    amount: 102,
    created: '2018-05-12 12:00:16',
  },
  {
    amount: 106,
    created: '2018-05-13 12:00:44',
  },
  {
    amount: 93,
    created: '2018-05-14 12:01:01',
  },
  {
    amount: 101,
    created: '2018-05-15 12:00:34',
  },
  {
    amount: 92,
    created: '2018-05-16 12:01:25',
  },
  {
    amount: 106,
    created: '2018-05-17 12:00:46',
  },
  {
    amount: 90,
    created: '2018-05-18 12:00:58',
  },
  {
    amount: 84,
    created: '2018-05-19 12:00:30',
  },
  {
    amount: 82,
    created: '2018-05-20 12:01:20',
  },
  {
    amount: 75,
    created: '2018-05-21 12:00:58',
  },
  {
    amount: 69,
    created: '2018-05-22 12:00:24',
  },
  {
    amount: 101,
    created: '2018-05-23 12:01:15',
  },
  {
    amount: 104,
    created: '2018-05-24 12:00:36',
  },
  {
    amount: 93,
    created: '2018-05-25 12:01:24',
  },
  {
    amount: 124,
    created: '2018-05-26 12:01:26',
  },
  {
    amount: 108,
    created: '2018-05-27 12:01:25',
  },
  {
    amount: 101,
    created: '2018-05-28 12:00:13',
  },
  {
    amount: 98,
    created: '2018-05-29 12:01:04',
  },
  {
    amount: 102,
    created: '2018-05-30 12:00:19',
  },
  {
    amount: 92,
    created: '2018-05-31 12:00:18',
  },
  {
    amount: 97,
    created: '2018-06-01 12:00:19',
  },
  {
    amount: 110,
    created: '2018-06-02 12:00:19',
  },
  {
    amount: 95,
    created: '2018-06-03 12:00:25',
  },
  {
    amount: 90,
    created: '2018-06-04 12:00:55',
  },
  {
    amount: 92,
    created: '2018-06-05 12:01:25',
  },
  {
    amount: 118,
    created: '2018-06-06 12:00:44',
  },
  {
    amount: 103,
    created: '2018-06-07 12:00:59',
  },
  {
    amount: 94,
    created: '2018-06-08 12:01:28',
  },
  {
    amount: 110,
    created: '2018-06-09 12:00:17',
  },
  {
    amount: 100,
    created: '2018-06-10 12:01:25',
  },
  {
    amount: 88,
    created: '2018-06-11 12:01:24',
  },
  {
    amount: 84,
    created: '2018-06-12 12:00:24',
  },
  {
    amount: 109,
    created: '2018-06-13 12:00:39',
  },
  {
    amount: 98,
    created: '2018-06-14 12:00:55',
  },
  {
    amount: 97,
    created: '2018-06-15 12:00:50',
  },
  {
    amount: 90,
    created: '2018-06-16 12:00:57',
  },
  {
    amount: 91,
    created: '2018-06-17 12:01:33',
  },
  {
    amount: 83,
    created: '2018-06-18 12:01:05',
  },
  {
    amount: 99,
    created: '2018-06-19 12:00:21',
  },
  {
    amount: 91,
    created: '2018-06-20 12:01:09',
  },
  {
    amount: 88,
    created: '2018-06-21 12:00:29',
  },
  {
    amount: 94,
    created: '2018-06-22 12:01:19',
  },
  {
    amount: 98,
    created: '2018-06-23 12:00:11',
  },
  {
    amount: 91,
    created: '2018-06-24 12:00:52',
  },
  {
    amount: 87,
    created: '2018-06-25 12:00:28',
  },
  {
    amount: 91,
    created: '2018-06-26 12:00:23',
  },
  {
    amount: 81,
    created: '2018-06-27 12:00:19',
  },
  {
    amount: 84,
    created: '2018-06-28 12:01:11',
  },
  {
    amount: 83,
    created: '2018-06-29 12:01:18',
  },
  {
    amount: 89,
    created: '2018-06-30 12:00:12',
  },
  {
    amount: 77,
    created: '2018-07-01 12:00:14',
  },
  {
    amount: 78,
    created: '2018-07-02 12:00:32',
  },
  {
    amount: 77,
    created: '2018-07-03 12:00:27',
  },
  {
    amount: 73,
    created: '2018-07-04 12:01:26',
  },
  {
    amount: 93,
    created: '2018-07-05 12:00:19',
  },
  {
    amount: 90,
    created: '2018-07-06 12:00:22',
  },
  {
    amount: 89,
    created: '2018-07-07 12:00:21',
  },
  {
    amount: 97,
    created: '2018-07-08 12:00:21',
  },
  {
    amount: 87,
    created: '2018-07-09 12:01:09',
  },
  {
    amount: 82,
    created: '2018-07-10 12:00:38',
  },
  {
    amount: 93,
    created: '2018-07-11 12:00:39',
  },
  {
    amount: 99,
    created: '2018-07-12 12:00:44',
  },
  {
    amount: 90,
    created: '2018-07-13 12:00:11',
  },
  {
    amount: 85,
    created: '2018-07-14 12:00:33',
  },
  {
    amount: 85,
    created: '2018-07-15 12:01:28',
  },
  {
    amount: 72,
    created: '2018-07-16 12:00:25',
  },
  {
    amount: 83,
    created: '2018-07-17 12:00:57',
  },
  {
    amount: 85,
    created: '2018-07-18 12:00:40',
  },
  {
    amount: 94,
    created: '2018-07-19 12:01:15',
  },
  {
    amount: 86,
    created: '2018-07-20 12:01:02',
  },
  {
    amount: 85,
    created: '2018-07-21 12:00:29',
  },
  {
    amount: 100,
    created: '2018-07-22 12:00:22',
  },
  {
    amount: 89,
    created: '2018-07-23 12:00:41',
  },
  {
    amount: 85,
    created: '2018-07-24 12:01:29',
  },
  {
    amount: 81,
    created: '2018-07-25 12:01:07',
  },
  {
    amount: 74,
    created: '2018-07-26 12:00:16',
  },
  {
    amount: 86,
    created: '2018-07-27 12:00:45',
  },
  {
    amount: 89,
    created: '2018-07-28 12:01:09',
  },
  {
    amount: 107,
    created: '2018-07-29 12:01:14',
  },
  {
    amount: 97,
    created: '2018-07-30 12:00:57',
  },
  {
    amount: 99,
    created: '2018-07-31 12:00:53',
  },
  {
    amount: 88,
    created: '2018-08-01 12:00:57',
  },
  {
    amount: 104,
    created: '2018-08-02 12:00:26',
  },
  {
    amount: 94,
    created: '2018-08-03 12:00:21',
  },
  {
    amount: 98,
    created: '2018-08-04 12:00:43',
  },
  {
    amount: 108,
    created: '2018-08-05 12:01:09',
  },
  {
    amount: 102,
    created: '2018-08-06 12:00:20',
  },
  {
    amount: 94,
    created: '2018-08-07 12:00:49',
  },
  {
    amount: 109,
    created: '2018-08-08 12:00:56',
  },
  {
    amount: 92,
    created: '2018-08-09 12:00:38',
  },
  {
    amount: 115,
    created: '2018-08-10 12:01:10',
  },
  {
    amount: 104,
    created: '2018-08-11 12:00:53',
  },
  {
    amount: 91,
    created: '2018-08-12 12:01:07',
  },
  {
    amount: 93,
    created: '2018-08-13 12:00:36',
  },
  {
    amount: 93,
    created: '2018-08-14 12:01:03',
  },
  {
    amount: 103,
    created: '2018-08-15 12:00:25',
  },
  {
    amount: 92,
    created: '2018-08-16 12:00:37',
  },
  {
    amount: 95,
    created: '2018-08-17 12:00:45',
  },
  {
    amount: 73,
    created: '2018-08-18 12:00:48',
  },
  {
    amount: 77,
    created: '2018-08-19 12:00:22',
  },
  {
    amount: 82,
    created: '2018-08-20 12:01:09',
  },
  {
    amount: 71,
    created: '2018-08-21 12:01:01',
  },
  {
    amount: 70,
    created: '2018-08-22 12:00:47',
  },
  {
    amount: 84,
    created: '2018-08-23 12:01:04',
  },
  {
    amount: 73,
    created: '2018-08-24 12:01:16',
  },
  {
    amount: 74,
    created: '2018-08-25 12:00:35',
  },
  {
    amount: 61,
    created: '2018-08-26 12:00:47',
  },
  {
    amount: 74,
    created: '2018-08-27 12:01:05',
  },
  {
    amount: 75,
    created: '2018-08-28 12:00:12',
  },
  {
    amount: 77,
    created: '2018-08-29 12:00:17',
  },
  {
    amount: 68,
    created: '2018-08-30 12:01:15',
  },
  {
    amount: 79,
    created: '2018-08-31 12:00:14',
  },
  {
    amount: 84,
    created: '2018-09-01 12:00:18',
  },
  {
    amount: 67,
    created: '2018-09-02 12:00:20',
  },
  {
    amount: 66,
    created: '2018-09-03 12:00:15',
  },
  {
    amount: 73,
    created: '2018-09-04 12:01:13',
  },
  {
    amount: 77,
    created: '2018-09-05 12:00:33',
  },
  {
    amount: 58,
    created: '2018-09-06 12:00:13',
  },
  {
    amount: 55,
    created: '2018-09-07 12:01:11',
  },
  {
    amount: 65,
    created: '2018-09-08 12:00:40',
  },
  {
    amount: 64,
    created: '2018-09-09 12:00:32',
  },
  {
    amount: 62,
    created: '2018-09-10 12:00:56',
  },
  {
    amount: 55,
    created: '2018-09-11 12:01:22',
  },
  {
    amount: 67,
    created: '2018-09-12 12:00:19',
  },
  {
    amount: 64,
    created: '2018-09-13 12:00:15',
  },
  {
    amount: 51,
    created: '2018-09-14 12:00:54',
  },
  {
    amount: 63,
    created: '2018-09-15 12:00:32',
  },
  {
    amount: 53,
    created: '2018-09-16 12:00:16',
  },
  {
    amount: 44,
    created: '2018-09-17 12:00:18',
  },
  {
    amount: 40,
    created: '2018-09-18 12:00:15',
  },
  {
    amount: 36,
    created: '2018-09-19 12:00:35',
  },
  {
    amount: 37,
    created: '2018-09-20 12:00:19',
  },
  {
    amount: 45,
    created: '2018-09-21 12:00:12',
  },
  {
    amount: 52,
    created: '2018-09-22 12:00:56',
  },
  {
    amount: 39,
    created: '2018-09-23 12:00:21',
  },
  {
    amount: 37,
    created: '2018-09-24 12:00:28',
  },
  {
    amount: 51,
    created: '2018-09-25 12:01:06',
  },
  {
    amount: 47,
    created: '2018-09-26 12:00:38',
  },
  {
    amount: 53,
    created: '2018-09-27 12:01:00',
  },
  {
    amount: 63,
    created: '2018-09-28 12:00:37',
  },
  {
    amount: 72,
    created: '2018-09-29 12:00:27',
  },
  {
    amount: 59,
    created: '2018-09-30 12:00:20',
  },
  {
    amount: 54,
    created: '2018-10-01 12:00:33',
  },
  {
    amount: 61,
    created: '2018-10-02 12:00:32',
  },
  {
    amount: 41,
    created: '2018-10-03 12:00:22',
  },
  {
    amount: 56,
    created: '2018-10-04 12:00:17',
  },
  {
    amount: 59,
    created: '2018-10-05 12:00:39',
  },
  {
    amount: 57,
    created: '2018-10-06 12:00:53',
  },
  {
    amount: 61,
    created: '2018-10-07 12:00:32',
  },
  {
    amount: 43,
    created: '2018-10-08 12:00:23',
  },
  {
    amount: 55,
    created: '2018-10-09 12:00:28',
  },
  {
    amount: 42,
    created: '2018-10-10 12:00:51',
  },
  {
    amount: 44,
    created: '2018-10-11 12:00:36',
  },
  {
    amount: 60,
    created: '2018-10-12 12:00:12',
  },
  {
    amount: 58,
    created: '2018-10-13 12:00:13',
  },
  {
    amount: 59,
    created: '2018-10-14 12:00:12',
  },
  {
    amount: 44,
    created: '2018-10-15 12:00:36',
  },
  {
    amount: 59,
    created: '2018-10-16 12:00:48',
  },
  {
    amount: 57,
    created: '2018-10-17 12:01:04',
  },
  {
    amount: 60,
    created: '2018-10-18 12:00:53',
  },
  {
    amount: 64,
    created: '2018-10-19 12:00:32',
  },
  {
    amount: 60,
    created: '2018-10-20 12:01:13',
  },
  {
    amount: 47,
    created: '2018-10-21 12:00:16',
  },
  {
    amount: 58,
    created: '2018-10-22 12:01:12',
  },
  {
    amount: 64,
    created: '2018-10-23 12:01:00',
  },
  {
    amount: 65,
    created: '2018-10-24 12:00:19',
  },
  {
    amount: 62,
    created: '2018-10-25 12:00:40',
  },
  {
    amount: 54,
    created: '2018-10-26 12:01:35',
  },
  {
    amount: 65,
    created: '2018-10-27 12:00:50',
  },
  {
    amount: 58,
    created: '2018-10-28 12:00:54',
  },
  {
    amount: 57,
    created: '2018-10-29 12:01:03',
  },
  {
    amount: 45,
    created: '2018-10-30 12:00:43',
  },
  {
    amount: 52,
    created: '2018-10-31 12:00:37',
  },
  {
    amount: 46,
    created: '2018-11-01 12:00:27',
  },
  {
    amount: 42,
    created: '2018-11-02 12:00:53',
  },
  {
    amount: 54,
    created: '2018-11-03 12:00:37',
  },
  {
    amount: 39,
    created: '2018-11-04 12:01:07',
  },
  {
    amount: 44,
    created: '2018-11-05 12:00:14',
  },
  {
    amount: 53,
    created: '2018-11-06 12:00:40',
  },
  {
    amount: 48,
    created: '2018-11-07 12:00:32',
  },
  {
    amount: 47,
    created: '2018-11-08 12:00:38',
  },
  {
    amount: 45,
    created: '2018-11-09 12:00:44',
  },
  {
    amount: 57,
    created: '2018-11-10 12:00:37',
  },
  {
    amount: 46,
    created: '2018-11-11 12:00:51',
  },
  {
    amount: 41,
    created: '2018-11-12 12:01:06',
  },
  {
    amount: 43,
    created: '2018-11-13 12:00:27',
  },
  {
    amount: 47,
    created: '2018-11-14 12:00:17',
  },
  {
    amount: 43,
    created: '2018-11-15 12:01:25',
  },
  {
    amount: 44,
    created: '2018-11-16 12:00:34',
  },
  {
    amount: 59,
    created: '2018-11-17 12:01:14',
  },
  {
    amount: 50,
    created: '2018-11-18 12:01:14',
  },
  {
    amount: 43,
    created: '2018-11-19 12:00:17',
  },
  {
    amount: 44,
    created: '2018-11-20 12:00:17',
  },
  {
    amount: 52,
    created: '2018-11-21 12:00:12',
  },
  {
    amount: 40,
    created: '2018-11-22 12:00:58',
  },
  {
    amount: 41,
    created: '2018-11-23 12:00:47',
  },
  {
    amount: 52,
    created: '2018-11-24 12:00:37',
  },
  {
    amount: 58,
    created: '2018-11-25 12:00:21',
  },
  {
    amount: 52,
    created: '2018-11-26 12:01:04',
  },
  {
    amount: 44,
    created: '2018-11-27 12:00:19',
  },
  {
    amount: 51,
    created: '2018-11-28 12:01:09',
  },
  {
    amount: 57,
    created: '2018-11-29 12:00:38',
  },
  {
    amount: 59,
    created: '2018-11-30 12:01:11',
  },
  {
    amount: 52,
    created: '2018-12-01 12:01:26',
  },
  {
    amount: 52,
    created: '2018-12-02 12:01:19',
  },
  {
    amount: 60,
    created: '2018-12-03 12:01:16',
  },
  {
    amount: 51,
    created: '2018-12-04 12:01:11',
  },
  {
    amount: 54,
    created: '2018-12-05 12:00:51',
  },
  {
    amount: 60,
    created: '2018-12-06 12:00:57',
  },
  {
    amount: 66,
    created: '2018-12-07 12:00:25',
  },
  {
    amount: 70,
    created: '2018-12-08 12:01:24',
  },
  {
    amount: 62,
    created: '2018-12-09 12:00:34',
  },
  {
    amount: 66,
    created: '2018-12-10 12:01:01',
  },
  {
    amount: 62,
    created: '2018-12-11 12:01:30',
  },
  {
    amount: 60,
    created: '2018-12-12 12:00:42',
  },
  {
    amount: 40,
    created: '2018-12-13 12:01:19',
  },
  {
    amount: 49,
    created: '2018-12-14 12:00:23',
  },
  {
    amount: 63,
    created: '2018-12-15 12:00:31',
  },
  {
    amount: 43,
    created: '2018-12-16 12:01:03',
  },
  {
    amount: 51,
    created: '2018-12-17 12:01:03',
  },
  {
    amount: 52,
    created: '2018-12-18 12:00:40',
  },
  {
    amount: 63,
    created: '2018-12-19 12:00:59',
  },
  {
    amount: 50,
    created: '2018-12-20 12:01:10',
  },
  {
    amount: 40,
    created: '2018-12-21 12:00:29',
  },
  {
    amount: 56,
    created: '2018-12-22 12:01:09',
  },
  {
    amount: 58,
    created: '2018-12-23 12:00:23',
  },
  {
    amount: 53,
    created: '2018-12-24 12:00:32',
  },
  {
    amount: 54,
    created: '2018-12-25 12:00:42',
  },
  {
    amount: 73,
    created: '2018-12-26 12:00:33',
  },
  {
    amount: 57,
    created: '2018-12-27 12:00:39',
  },
  {
    amount: 52,
    created: '2018-12-28 12:00:17',
  },
  {
    amount: 41,
    created: '2018-12-29 12:00:16',
  },
  {
    amount: 49,
    created: '2018-12-30 12:00:56',
  },
  {
    amount: 60,
    created: '2018-12-31 12:00:19',
  },
  {
    amount: 60,
    created: '2019-01-01 12:01:02',
  },
  {
    amount: 54,
    created: '2019-01-02 12:00:33',
  },
  {
    amount: 45,
    created: '2019-01-03 12:00:20',
  },
  {
    amount: 44,
    created: '2019-01-04 12:00:48',
  },
  {
    amount: 54,
    created: '2019-01-05 12:00:44',
  },
  {
    amount: 42,
    created: '2019-01-06 12:00:18',
  },
  {
    amount: 49,
    created: '2019-01-07 12:00:59',
  },
  {
    amount: 37,
    created: '2019-01-08 12:00:17',
  },
  {
    amount: 47,
    created: '2019-01-09 12:01:07',
  },
  {
    amount: 42,
    created: '2019-01-10 12:01:08',
  },
  {
    amount: 45,
    created: '2019-01-11 12:00:34',
  },
  {
    amount: 69,
    created: '2019-01-12 12:01:06',
  },
  {
    amount: 50,
    created: '2019-01-13 12:00:26',
  },
  {
    amount: 53,
    created: '2019-01-14 12:00:34',
  },
  {
    amount: 50,
    created: '2019-01-15 12:00:58',
  },
  {
    amount: 59,
    created: '2019-01-16 12:00:28',
  },
  {
    amount: 60,
    created: '2019-01-17 12:00:16',
  },
  {
    amount: 56,
    created: '2019-01-18 12:00:19',
  },
  {
    amount: 59,
    created: '2019-01-19 12:00:44',
  },
  {
    amount: 61,
    created: '2019-01-20 12:00:36',
  },
  {
    amount: 63,
    created: '2019-01-21 12:00:56',
  },
  {
    amount: 79,
    created: '2019-01-22 12:00:29',
  },
  {
    amount: 66,
    created: '2019-01-23 12:01:02',
  },
  {
    amount: 59,
    created: '2019-01-24 12:00:51',
  },
  {
    amount: 55,
    created: '2019-01-25 12:00:29',
  },
  {
    amount: 56,
    created: '2019-01-26 12:00:27',
  },
  {
    amount: 55,
    created: '2019-01-27 12:00:54',
  },
  {
    amount: 56,
    created: '2019-01-28 12:00:55',
  },
  {
    amount: 57,
    created: '2019-01-29 12:00:18',
  },
  {
    amount: 70,
    created: '2019-01-30 12:00:25',
  },
  {
    amount: 60,
    created: '2019-01-31 12:00:34',
  },
  {
    amount: 60,
    created: '2019-02-01 12:00:26',
  },
  {
    amount: 68,
    created: '2019-02-02 12:00:53',
  },
  {
    amount: 66,
    created: '2019-02-03 12:00:35',
  },
  {
    amount: 78,
    created: '2019-02-04 12:00:30',
  },
  {
    amount: 50,
    created: '2019-02-05 12:00:30',
  },
  {
    amount: 66,
    created: '2019-02-06 12:00:25',
  },
  {
    amount: 56,
    created: '2019-02-07 12:00:34',
  },
  {
    amount: 69,
    created: '2019-02-08 12:01:16',
  },
  {
    amount: 88,
    created: '2019-02-09 12:01:15',
  },
  {
    amount: 61,
    created: '2019-02-10 12:00:33',
  },
  {
    amount: 62,
    created: '2019-02-11 12:00:14',
  },
  {
    amount: 49,
    created: '2019-02-12 12:00:46',
  },
  {
    amount: 64,
    created: '2019-02-13 12:01:12',
  },
  {
    amount: 51,
    created: '2019-02-14 12:00:49',
  },
  {
    amount: 63,
    created: '2019-02-15 12:00:12',
  },
  {
    amount: 59,
    created: '2019-02-16 12:00:34',
  },
  {
    amount: 49,
    created: '2019-02-17 12:00:54',
  },
  {
    amount: 53,
    created: '2019-02-18 12:00:15',
  },
  {
    amount: 67,
    created: '2019-02-19 12:00:21',
  },
  {
    amount: 65,
    created: '2019-02-20 12:01:07',
  },
  {
    amount: 60,
    created: '2019-02-21 12:00:54',
  },
  {
    amount: 53,
    created: '2019-02-22 12:00:51',
  },
  {
    amount: 60,
    created: '2019-02-23 12:00:39',
  },
  {
    amount: 66,
    created: '2019-02-24 12:01:03',
  },
  {
    amount: 55,
    created: '2019-02-25 12:00:45',
  },
  {
    amount: 53,
    created: '2019-02-26 12:00:56',
  },
  {
    amount: 47,
    created: '2019-02-27 12:00:52',
  },
  {
    amount: 51,
    created: '2019-02-28 12:00:25',
  },
  {
    amount: 49,
    created: '2019-03-01 12:00:59',
  },
  {
    amount: 49,
    created: '2019-03-02 12:00:55',
  },
  {
    amount: 63,
    created: '2019-03-03 12:00:12',
  },
  {
    amount: 53,
    created: '2019-03-04 12:01:14',
  },
  {
    amount: 53,
    created: '2019-03-05 12:00:07',
  },
  {
    amount: 68,
    created: '2019-03-06 12:00:09',
  },
  {
    amount: 48,
    created: '2019-03-07 12:00:42',
  },
  {
    amount: 55,
    created: '2019-03-08 12:00:22',
  },
  {
    amount: 63,
    created: '2019-03-09 12:00:41',
  },
  {
    amount: 60,
    created: '2019-03-10 12:01:00',
  },
  {
    amount: 54,
    created: '2019-03-11 12:00:17',
  },
  {
    amount: 71,
    created: '2019-03-12 12:00:46',
  },
  {
    amount: 62,
    created: '2019-03-13 12:00:17',
  },
  {
    amount: 60,
    created: '2019-03-14 12:00:45',
  },
  {
    amount: 51,
    created: '2019-03-15 12:00:53',
  },
  {
    amount: 68,
    created: '2019-03-16 12:00:17',
  },
  {
    amount: 57,
    created: '2019-03-17 12:01:18',
  },
  {
    amount: 61,
    created: '2019-03-18 12:00:54',
  },
  {
    amount: 59,
    created: '2019-03-19 12:00:16',
  },
  {
    amount: 59,
    created: '2019-03-20 12:00:32',
  },
  {
    amount: 65,
    created: '2019-03-21 12:00:58',
  },
  {
    amount: 56,
    created: '2019-03-22 12:00:13',
  },
  {
    amount: 61,
    created: '2019-03-23 12:01:07',
  },
  {
    amount: 53,
    created: '2019-03-24 12:00:20',
  },
  {
    amount: 53,
    created: '2019-03-25 12:00:31',
  },
  {
    amount: 52,
    created: '2019-03-26 12:00:32',
  },
  {
    amount: 51,
    created: '2019-03-27 12:00:15',
  },
  {
    amount: 53,
    created: '2019-03-28 12:00:18',
  },
  {
    amount: 57,
    created: '2019-03-29 12:01:01',
  },
  {
    amount: 64,
    created: '2019-03-30 12:00:16',
  },
  {
    amount: 55,
    created: '2019-03-31 12:00:24',
  },
  {
    amount: 47,
    created: '2019-04-01 12:00:55',
  },
  {
    amount: 49,
    created: '2019-04-02 12:00:47',
  },
  {
    amount: 45,
    created: '2019-04-03 12:01:01',
  },
  {
    amount: 47,
    created: '2019-04-04 12:00:41',
  },
  {
    amount: 53,
    created: '2019-04-05 12:00:44',
  },
  {
    amount: 65,
    created: '2019-04-06 12:00:48',
  },
  {
    amount: 57,
    created: '2019-04-07 12:00:27',
  },
  {
    amount: 61,
    created: '2019-04-08 12:00:14',
  },
  {
    amount: 55,
    created: '2019-04-09 12:01:12',
  },
  {
    amount: 56,
    created: '2019-04-10 12:00:14',
  },
  {
    amount: 57,
    created: '2019-04-11 12:00:55',
  },
  {
    amount: 57,
    created: '2019-04-12 12:00:50',
  },
  {
    amount: 53,
    created: '2019-04-13 12:00:15',
  },
  {
    amount: 54,
    created: '2019-04-14 12:01:06',
  },
  {
    amount: 53,
    created: '2019-04-15 12:00:39',
  },
  {
    amount: 55,
    created: '2019-04-16 12:00:29',
  },
  {
    amount: 44,
    created: '2019-04-17 12:00:53',
  },
  {
    amount: 61,
    created: '2019-04-18 12:00:13',
  },
  {
    amount: 60,
    created: '2019-04-19 12:01:07',
  },
  {
    amount: 52,
    created: '2019-04-20 12:00:49',
  },
  {
    amount: 55,
    created: '2019-04-21 12:00:22',
  },
  {
    amount: 57,
    created: '2019-04-22 12:00:48',
  },
  {
    amount: 43,
    created: '2019-04-23 12:00:40',
  },
  {
    amount: 62,
    created: '2019-04-24 12:00:38',
  },
  {
    amount: 49,
    created: '2019-04-25 12:01:16',
  },
  {
    amount: 55,
    created: '2019-04-26 12:00:15',
  },
  {
    amount: 51,
    created: '2019-04-27 12:00:25',
  },
  {
    amount: 54,
    created: '2019-04-28 12:00:11',
  },
  {
    amount: 64,
    created: '2019-04-29 12:00:47',
  },
  {
    amount: 48,
    created: '2019-04-30 12:00:19',
  },
  {
    amount: 56,
    created: '2019-05-01 12:01:18',
  },
  {
    amount: 45,
    created: '2019-05-02 12:00:44',
  },
  {
    amount: 57,
    created: '2019-05-03 12:00:55',
  },
  {
    amount: 55,
    created: '2019-05-04 12:00:14',
  },
  {
    amount: 43,
    created: '2019-05-05 12:00:41',
  },
  {
    amount: 48,
    created: '2019-05-06 12:00:55',
  },
  {
    amount: 51,
    created: '2019-05-07 12:00:23',
  },
  {
    amount: 50,
    created: '2019-05-08 12:00:20',
  },
  {
    amount: 56,
    created: '2019-05-09 12:01:01',
  },
  {
    amount: 62,
    created: '2019-05-10 12:01:10',
  },
  {
    amount: 58,
    created: '2019-05-11 12:00:59',
  },
  {
    amount: 54,
    created: '2019-05-12 12:00:17',
  },
  {
    amount: 67,
    created: '2019-05-13 12:00:35',
  },
  {
    amount: 51,
    created: '2019-05-14 12:00:45',
  },
  {
    amount: 56,
    created: '2019-05-15 12:00:14',
  },
  {
    amount: 49,
    created: '2019-05-16 12:00:55',
  },
  {
    amount: 57,
    created: '2019-05-17 12:00:34',
  },
  {
    amount: 56,
    created: '2019-05-18 12:00:48',
  },
  {
    amount: 44,
    created: '2019-05-19 12:01:13',
  },
  {
    amount: 53,
    created: '2019-05-20 12:01:02',
  },
  {
    amount: 68,
    created: '2019-05-21 12:00:16',
  },
  {
    amount: 69,
    created: '2019-05-22 12:01:05',
  },
  {
    amount: 68,
    created: '2019-05-23 12:00:26',
  },
  {
    amount: 54,
    created: '2019-05-24 12:00:53',
  },
  {
    amount: 62,
    created: '2019-05-25 12:00:12',
  },
  {
    amount: 57,
    created: '2019-05-26 12:00:22',
  },
  {
    amount: 63,
    created: '2019-05-27 12:00:41',
  },
  {
    amount: 59,
    created: '2019-05-28 12:00:22',
  },
  {
    amount: 63,
    created: '2019-05-29 12:01:07',
  },
  {
    amount: 73,
    created: '2019-05-30 12:00:36',
  },
  {
    amount: 61,
    created: '2019-05-31 12:00:27',
  },
  {
    amount: 56,
    created: '2019-06-01 12:00:29',
  },
  {
    amount: 57,
    created: '2019-06-02 12:00:56',
  },
  {
    amount: 68,
    created: '2019-06-03 12:01:07',
  },
  {
    amount: 73,
    created: '2019-06-04 12:01:01',
  },
  {
    amount: 65,
    created: '2019-06-05 12:00:12',
  },
  {
    amount: 58,
    created: '2019-06-06 12:00:33',
  },
  {
    amount: 60,
    created: '2019-06-07 12:00:43',
  },
  {
    amount: 63,
    created: '2019-06-08 12:00:30',
  },
  {
    amount: 61,
    created: '2019-06-09 12:01:05',
  },
  {
    amount: 65,
    created: '2019-06-10 12:00:11',
  },
  {
    amount: 62,
    created: '2019-06-11 12:00:43',
  },
  {
    amount: 78,
    created: '2019-06-12 12:00:36',
  },
  {
    amount: 63,
    created: '2019-06-13 12:01:04',
  },
  {
    amount: 79,
    created: '2019-06-14 12:00:31',
  },
  {
    amount: 69,
    created: '2019-06-15 12:00:22',
  },
  {
    amount: 74,
    created: '2019-06-16 12:00:43',
  },
  {
    amount: 65,
    created: '2019-06-17 12:00:36',
  },
  {
    amount: 92,
    created: '2019-06-18 12:01:16',
  },
  {
    amount: 65,
    created: '2019-06-19 12:01:07',
  },
  {
    amount: 74,
    created: '2019-06-20 12:00:19',
  },
  {
    amount: 55,
    created: '2019-06-21 12:00:21',
  },
  {
    amount: 58,
    created: '2019-06-22 12:00:23',
  },
  {
    amount: 61,
    created: '2019-06-23 12:01:07',
  },
  {
    amount: 51,
    created: '2019-06-24 12:00:39',
  },
  {
    amount: 62,
    created: '2019-06-25 12:01:15',
  },
  {
    amount: 57,
    created: '2019-06-26 12:01:02',
  },
  {
    amount: 51,
    created: '2019-06-27 12:01:06',
  },
  {
    amount: 57,
    created: '2019-06-28 12:00:54',
  },
  {
    amount: 56,
    created: '2019-06-29 12:00:29',
  },
  {
    amount: 42,
    created: '2019-06-30 12:00:13',
  },
  {
    amount: 47,
    created: '2019-07-01 12:00:31',
  },
  {
    amount: 44,
    created: '2019-07-02 12:00:15',
  },
  {
    amount: 60,
    created: '2019-07-03 12:00:12',
  },
  {
    amount: 48,
    created: '2019-07-04 12:01:00',
  },
  {
    amount: 46,
    created: '2019-07-05 12:00:13',
  },
  {
    amount: 64,
    created: '2019-07-06 12:00:25',
  },
  {
    amount: 49,
    created: '2019-07-07 12:00:16',
  },
  {
    amount: 55,
    created: '2019-07-08 12:00:20',
  },
  {
    amount: 54,
    created: '2019-07-09 12:00:28',
  },
  {
    amount: 56,
    created: '2019-07-10 12:00:12',
  },
  {
    amount: 62,
    created: '2019-07-11 12:01:02',
  },
  {
    amount: 61,
    created: '2019-07-12 12:00:35',
  },
  {
    amount: 67,
    created: '2019-07-13 12:00:32',
  },
  {
    amount: 72,
    created: '2019-07-14 12:01:05',
  },
  {
    amount: 62,
    created: '2019-07-15 12:01:13',
  },
  {
    amount: 67,
    created: '2019-07-16 12:00:13',
  },
  {
    amount: 57,
    created: '2019-07-17 12:00:12',
  },
  {
    amount: 62,
    created: '2019-07-18 12:00:17',
  },
  {
    amount: 70,
    created: '2019-07-19 12:00:45',
  },
  {
    amount: 60,
    created: '2019-07-20 12:00:14',
  },
  {
    amount: 59,
    created: '2019-07-21 12:00:43',
  },
  {
    amount: 65,
    created: '2019-07-22 12:00:18',
  },
  {
    amount: 70,
    created: '2019-07-23 12:00:05',
  },
  {
    amount: 67,
    created: '2019-07-24 12:00:52',
  },
  {
    amount: 63,
    created: '2019-07-25 12:01:06',
  },
  {
    amount: 70,
    created: '2019-07-26 12:01:03',
  },
  {
    amount: 71,
    created: '2019-07-27 12:00:33',
  },
  {
    amount: 70,
    created: '2019-07-28 12:00:23',
  },
  {
    amount: 70,
    created: '2019-07-29 12:00:58',
  },
  {
    amount: 68,
    created: '2019-07-30 12:00:38',
  },
  {
    amount: 75,
    created: '2019-07-31 12:00:18',
  },
  {
    amount: 71,
    created: '2019-08-01 12:00:24',
  },
  {
    amount: 82,
    created: '2019-08-02 12:00:57',
  },
  {
    amount: 84,
    created: '2019-08-03 12:01:09',
  },
  {
    amount: 77,
    created: '2019-08-04 12:00:52',
  },
  {
    amount: 79,
    created: '2019-08-05 12:00:11',
  },
  {
    amount: 90,
    created: '2019-08-06 12:00:59',
  },
  {
    amount: 82,
    created: '2019-08-07 12:00:37',
  },
  {
    amount: 81,
    created: '2019-08-08 12:00:48',
  },
  {
    amount: 85,
    created: '2019-08-09 12:00:49',
  },
  {
    amount: 79,
    created: '2019-08-10 12:00:51',
  },
  {
    amount: 76,
    created: '2019-08-11 12:00:58',
  },
  {
    amount: 66,
    created: '2019-08-12 12:00:18',
  },
  {
    amount: 63,
    created: '2019-08-13 12:00:35',
  },
  {
    amount: 70,
    created: '2019-08-14 12:01:08',
  },
  {
    amount: 68,
    created: '2019-08-15 12:00:20',
  },
  {
    amount: 76,
    created: '2019-08-16 12:00:16',
  },
  {
    amount: 70,
    created: '2019-08-17 12:00:47',
  },
  {
    amount: 65,
    created: '2019-08-18 12:00:46',
  },
  {
    amount: 79,
    created: '2019-08-19 12:00:32',
  },
  {
    amount: 85,
    created: '2019-08-20 12:00:12',
  },
  {
    amount: 80,
    created: '2019-08-21 12:00:10',
  },
  {
    amount: 65,
    created: '2019-08-22 12:00:23',
  },
  {
    amount: 66,
    created: '2019-08-23 12:00:46',
  },
  {
    amount: 71,
    created: '2019-08-24 12:00:54',
  },
  {
    amount: 62,
    created: '2019-08-25 12:00:19',
  },
  {
    amount: 68,
    created: '2019-08-26 12:00:55',
  },
  {
    amount: 73,
    created: '2019-08-27 12:00:10',
  },
  {
    amount: 79,
    created: '2019-08-28 12:01:01',
  },
  {
    amount: 69,
    created: '2019-08-29 12:00:16',
  },
  {
    amount: 89,
    created: '2019-08-30 12:01:10',
  },
  {
    amount: 79,
    created: '2019-08-31 12:01:08',
  },
  {
    amount: 66,
    created: '2019-09-01 12:01:15',
  },
  {
    amount: 64,
    created: '2019-09-02 12:00:12',
  },
  {
    amount: 73,
    created: '2019-09-03 12:00:43',
  },
  {
    amount: 70,
    created: '2019-09-04 12:01:04',
  },
  {
    amount: 54,
    created: '2019-09-05 12:00:22',
  },
  {
    amount: 71,
    created: '2019-09-06 12:00:13',
  },
  {
    amount: 79,
    created: '2019-09-07 12:00:40',
  },
  {
    amount: 62,
    created: '2019-09-08 12:00:40',
  },
  {
    amount: 64,
    created: '2019-09-09 12:00:19',
  },
  {
    amount: 67,
    created: '2019-09-10 12:01:13',
  },
  {
    amount: 77,
    created: '2019-09-11 12:00:22',
  },
  {
    amount: 76,
    created: '2019-09-12 12:00:12',
  },
  {
    amount: 67,
    created: '2019-09-13 12:00:15',
  },
  {
    amount: 64,
    created: '2019-09-14 12:00:57',
  },
  {
    amount: 59,
    created: '2019-09-15 12:00:23',
  },
  {
    amount: 58,
    created: '2019-09-16 12:00:23',
  },
  {
    amount: 64,
    created: '2019-09-17 12:00:11',
  },
  {
    amount: 58,
    created: '2019-09-18 12:00:57',
  },
  {
    amount: 57,
    created: '2019-09-19 12:01:05',
  },
  {
    amount: 52,
    created: '2019-09-20 12:00:31',
  },
  {
    amount: 53,
    created: '2019-09-21 12:00:29',
  },
  {
    amount: 51,
    created: '2019-09-22 12:00:20',
  },
  {
    amount: 63,
    created: '2019-09-23 12:00:16',
  },
  {
    amount: 72,
    created: '2019-09-24 12:00:49',
  },
  {
    amount: 49,
    created: '2019-09-25 12:01:08',
  },
  {
    amount: 61,
    created: '2019-09-26 12:01:01',
  },
  {
    amount: 67,
    created: '2019-09-27 12:00:17',
  },
  {
    amount: 61,
    created: '2019-09-28 12:00:58',
  },
  {
    amount: 62,
    created: '2019-09-29 12:00:48',
  },
  {
    amount: 51,
    created: '2019-09-30 12:00:12',
  },
  {
    amount: 56,
    created: '2019-10-01 12:00:41',
  },
  {
    amount: 63,
    created: '2019-10-02 12:01:00',
  },
  {
    amount: 52,
    created: '2019-10-03 12:00:34',
  },
  {
    amount: 52,
    created: '2019-10-04 12:00:14',
  },
  {
    amount: 51,
    created: '2019-10-05 12:00:35',
  },
  {
    amount: 56,
    created: '2019-10-06 12:00:21',
  },
  {
    amount: 47,
    created: '2019-10-07 12:00:27',
  },
  {
    amount: 55,
    created: '2019-10-08 12:00:12',
  },
  {
    amount: 57,
    created: '2019-10-09 12:01:08',
  },
  {
    amount: 53,
    created: '2019-10-10 12:00:37',
  },
  {
    amount: 55,
    created: '2019-10-11 12:00:17',
  },
  {
    amount: 78,
    created: '2019-10-12 12:00:16',
  },
  {
    amount: 54,
    created: '2019-10-13 12:00:21',
  },
  {
    amount: 56,
    created: '2019-10-14 12:00:29',
  },
  {
    amount: 61,
    created: '2019-10-15 12:00:51',
  },
  {
    amount: 54,
    created: '2019-10-16 12:00:21',
  },
  {
    amount: 50,
    created: '2019-10-17 12:00:26',
  },
  {
    amount: 52,
    created: '2019-10-18 12:00:13',
  },
  {
    amount: 66,
    created: '2019-10-19 12:00:40',
  },
  {
    amount: 47,
    created: '2019-10-20 12:00:41',
  },
  {
    amount: 51,
    created: '2019-10-21 12:00:53',
  },
  {
    amount: 48,
    created: '2019-10-22 12:01:31',
  },
  {
    amount: 54,
    created: '2019-10-23 12:00:28',
  },
  {
    amount: 34,
    created: '2019-10-24 12:00:55',
  },
  {
    amount: 53,
    created: '2019-10-25 12:00:25',
  },
  {
    amount: 54,
    created: '2019-10-26 12:00:47',
  },
  {
    amount: 53,
    created: '2019-10-27 12:00:22',
  },
  {
    amount: 52,
    created: '2019-10-28 12:00:28',
  },
  {
    amount: 59,
    created: '2019-10-29 12:00:51',
  },
  {
    amount: 64,
    created: '2019-10-30 12:00:47',
  },
  {
    amount: 64,
    created: '2019-10-31 12:00:38',
  },
  {
    amount: 51,
    created: '2019-11-01 12:00:23',
  },
  {
    amount: 57,
    created: '2019-11-02 12:00:18',
  },
  {
    amount: 56,
    created: '2019-11-03 12:01:09',
  },
  {
    amount: 59,
    created: '2019-11-04 12:00:47',
  },
  {
    amount: 60,
    created: '2019-11-05 12:01:13',
  },
  {
    amount: 71,
    created: '2019-11-06 12:00:51',
  },
  {
    amount: 65,
    created: '2019-11-07 12:00:35',
  },
  {
    amount: 73,
    created: '2019-11-08 12:00:50',
  },
  {
    amount: 63,
    created: '2019-11-09 12:00:46',
  },
  {
    amount: 54,
    created: '2019-11-10 12:00:53',
  },
  {
    amount: 54,
    created: '2019-11-11 12:01:06',
  },
  {
    amount: 58,
    created: '2019-11-12 12:00:16',
  },
  {
    amount: 62,
    created: '2019-11-13 12:00:15',
  },
  {
    amount: 63,
    created: '2019-11-14 12:00:33',
  },
  {
    amount: 58,
    created: '2019-11-15 12:01:07',
  },
  {
    amount: 68,
    created: '2019-11-16 12:00:54',
  },
  {
    amount: 52,
    created: '2019-11-17 12:00:48',
  },
  {
    amount: 56,
    created: '2019-11-18 12:00:12',
  },
  {
    amount: 49,
    created: '2019-11-19 12:00:54',
  },
  {
    amount: 57,
    created: '2019-11-20 12:00:55',
  },
  {
    amount: 57,
    created: '2019-11-21 12:00:43',
  },
  {
    amount: 58,
    created: '2019-11-22 12:00:57',
  },
  {
    amount: 63,
    created: '2019-11-23 12:00:55',
  },
  {
    amount: 61,
    created: '2019-11-24 12:01:09',
  },
  {
    amount: 63,
    created: '2019-11-25 12:00:13',
  },
  {
    amount: 68,
    created: '2019-11-26 12:00:17',
  },
  {
    amount: 73,
    created: '2019-11-27 12:00:12',
  },
  {
    amount: 73,
    created: '2019-11-28 12:00:30',
  },
  {
    amount: 70,
    created: '2019-11-29 12:00:42',
  },
  {
    amount: 63,
    created: '2019-11-30 12:01:00',
  },
  {
    amount: 59,
    created: '2019-12-01 12:00:55',
  },
  {
    amount: 66,
    created: '2019-12-02 12:00:58',
  },
  {
    amount: 59,
    created: '2019-12-03 12:01:04',
  },
  {
    amount: 48,
    created: '2019-12-04 12:00:12',
  },
  {
    amount: 47,
    created: '2019-12-05 12:01:04',
  },
  {
    amount: 58,
    created: '2019-12-06 12:00:40',
  },
  {
    amount: 55,
    created: '2019-12-07 12:01:10',
  },
  {
    amount: 55,
    created: '2019-12-08 12:00:44',
  },
  {
    amount: 59,
    created: '2019-12-09 12:01:14',
  },
  {
    amount: 53,
    created: '2019-12-10 12:00:12',
  },
  {
    amount: 62,
    created: '2019-12-11 12:00:14',
  },
  {
    amount: 44,
    created: '2019-12-12 12:00:07',
  },
  {
    amount: 62,
    created: '2019-12-13 12:00:21',
  },
  {
    amount: 51,
    created: '2019-12-14 12:00:17',
  },
  {
    amount: 52,
    created: '2019-12-15 12:00:12',
  },
  {
    amount: 62,
    created: '2019-12-16 12:00:44',
  },
  {
    amount: 63,
    created: '2019-12-17 12:01:02',
  },
  {
    amount: 64,
    created: '2019-12-18 12:00:20',
  },
  {
    amount: 47,
    created: '2019-12-19 12:00:34',
  },
  {
    amount: 61,
    created: '2019-12-20 12:01:12',
  },
  {
    amount: 59,
    created: '2019-12-21 12:00:09',
  },
  {
    amount: 57,
    created: '2019-12-22 12:00:28',
  },
  {
    amount: 60,
    created: '2019-12-23 12:00:25',
  },
  {
    amount: 57,
    created: '2019-12-24 12:00:40',
  },
  {
    amount: 47,
    created: '2019-12-25 12:01:07',
  },
  {
    amount: 58,
    created: '2019-12-26 12:00:14',
  },
  {
    amount: 56,
    created: '2019-12-27 12:00:52',
  },
  {
    amount: 54,
    created: '2019-12-28 12:00:10',
  },
  {
    amount: 63,
    created: '2019-12-29 12:00:12',
  },
  {
    amount: 74,
    created: '2019-12-30 12:00:13',
  },
  {
    amount: 64,
    created: '2019-12-31 12:00:35',
  },
  {
    amount: 63,
    created: '2020-01-01 12:00:38',
  },
  {
    amount: 37,
    created: '2020-01-02 12:00:22',
  },
  {
    amount: 39,
    created: '2020-01-03 12:00:52',
  },
  {
    amount: 40,
    created: '2020-01-04 12:01:04',
  },
  {
    amount: 24,
    created: '2020-01-05 12:00:27',
  },
  {
    amount: 31,
    created: '2020-01-06 12:00:16',
  },
  {
    amount: 26,
    created: '2020-01-07 12:00:54',
  },
  {
    amount: 36,
    created: '2020-01-08 12:00:22',
  },
  {
    amount: 47,
    created: '2020-01-09 12:00:13',
  },
  {
    amount: 25,
    created: '2020-01-10 12:00:10',
  },
  {
    amount: 31,
    created: '2020-01-11 12:01:17',
  },
  {
    amount: 37,
    created: '2020-01-12 12:00:06',
  },
  {
    amount: 37,
    created: '2020-01-13 12:00:54',
  },
  {
    amount: 36,
    created: '2020-01-14 12:00:09',
  },
  {
    amount: 40,
    created: '2020-01-15 12:00:32',
  },
  {
    amount: 43,
    created: '2020-01-16 12:00:41',
  },
  {
    amount: 43,
    created: '2020-01-17 12:00:55',
  },
  {
    amount: 46,
    created: '2020-01-18 12:01:08',
  },
  {
    amount: 42,
    created: '2020-01-19 12:00:32',
  },
  {
    amount: 32,
    created: '2020-01-20 12:00:17',
  },
  {
    amount: 45,
    created: '2020-01-21 12:00:45',
  },
  {
    amount: 34,
    created: '2020-01-22 12:00:23',
  },
  {
    amount: 44,
    created: '2020-01-23 12:00:51',
  },
  {
    amount: 41,
    created: '2020-01-24 12:00:45',
  },
  {
    amount: 48,
    created: '2020-01-25 12:00:30',
  },
  {
    amount: 52,
    created: '2020-01-26 12:00:06',
  },
  {
    amount: 29,
    created: '2020-01-27 12:00:49',
  },
  {
    amount: 41,
    created: '2020-01-28 12:00:13',
  },
  {
    amount: 55,
    created: '2020-01-29 12:00:49',
  },
  {
    amount: 34,
    created: '2020-01-30 12:00:11',
  },
  {
    amount: 48,
    created: '2020-01-31 12:01:01',
  },
  {
    amount: 44,
    created: '2020-02-01 12:00:48',
  },
  {
    amount: 35,
    created: '2020-02-02 12:00:16',
  },
  {
    amount: 51,
    created: '2020-02-03 12:00:31',
  },
  {
    amount: 49,
    created: '2020-02-04 12:00:58',
  },
  {
    amount: 47,
    created: '2020-02-05 12:00:18',
  },
  {
    amount: 47,
    created: '2020-02-06 12:00:10',
  },
  {
    amount: 54,
    created: '2020-02-07 12:00:31',
  },
  {
    amount: 57,
    created: '2020-02-08 12:00:29',
  },
  {
    amount: 35,
    created: '2020-02-09 12:00:22',
  },
  {
    amount: 37,
    created: '2020-02-10 12:00:54',
  },
  {
    amount: 39,
    created: '2020-02-11 12:00:11',
  },
  {
    amount: 37,
    created: '2020-02-12 12:00:27',
  },
  {
    amount: 31,
    created: '2020-02-13 12:00:18',
  },
  {
    amount: 36,
    created: '2020-02-14 12:01:01',
  },
  {
    amount: 47,
    created: '2020-02-15 12:00:37',
  },
  {
    amount: 23,
    created: '2020-02-16 12:00:18',
  },
  {
    amount: 43,
    created: '2020-02-17 12:00:09',
  },
  {
    amount: 50,
    created: '2020-02-18 12:00:42',
  },
  {
    amount: 28,
    created: '2020-02-19 12:00:27',
  },
  {
    amount: 31,
    created: '2020-02-20 12:00:11',
  },
  {
    amount: 50,
    created: '2020-02-21 12:00:31',
  },
];

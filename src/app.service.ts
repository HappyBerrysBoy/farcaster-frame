import { Injectable } from '@nestjs/common';

interface FarcasterMessage {
  untrustedData: {
    fid: number;
    url: string;
    messageHash: string;
    timestamp: number;
    network: number;
    buttonIndex: number;
    castId: {
      fid: number;
      hash: string;
    };
  };
  trustedData: {
    messageBytes: string;
  };
}

const mainPageBody = `
<div>
        <p>
            This is a Farcaster frame using Azle (<a
                href='https://github.com/demergent-labs/azle'>https://github.com/demergent-labs/azle</a>) hosted on the
            <a href='https://internetcomputer.org'>Internet Computer</a>.
        </p>
        <p>
            <a href='https://github.com/Gekctek/farcaster-frame-azle'>
                Github
                (https://github.com/Gekctek/farcaster-frame-azle)
            </a>
        </p>
    </div>
`;

let pageFromTemplate = (
  imageUrl: string,
  button1Text: string,
  button2Text: string,
  button3Text: string,
  button4Text: string,
  apiUrl: string,
  body: string,
) => `
<!DOCTYPE html>
<html lang='en'>

<head>
    <meta charset='utf-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta name='next-size-adjust' />
    <meta property='fc:frame' content='vNext' />
    <meta property='fc:frame:image' content='${imageUrl}' />
    <meta property='fc:frame:button:1' content='${button1Text}' />
    <meta property='fc:frame:button:2' content='${button2Text}' />
    <meta property='fc:frame:button:3' content='${button3Text}' />
    <meta property='fc:frame:button:4' content='${button4Text}' />
    <meta property='fc:frame:post_url' content='${apiUrl}' />
    <meta property='og:title' content='Azle farcaster frame' />
    <meta property='og:image' content='${imageUrl}' />
    <title>Azle farcaster frame</title>
</head>

<body>
    ${body}
</body>

</html>
`;

@Injectable()
export class AppService {
  getHello(): string {
    return pageFromTemplate(
      'https://stackstake.io/_next/image?url=%2Fimages%2Fapps-main.png&w=3840&q=75',
      'Button 1',
      'Button 2',
      'Button 3',
      'Button 4',
      'http://3.34.219.240:3030/farcaster',
      mainPageBody,
    );
  }

  test(): string {
    return pageFromTemplate(
      'https://stackstake.io/_next/image?url=%2Fimages%2Fapps-main.png&w=3840&q=75',
      'Button 1',
      'Button 2',
      'Button 3',
      'Button 4',
      'http://3.34.219.240:3030/farcaster',
      mainPageBody,
    );
  }
}

// https://uncommonlab.org/_next/image?url=%2Fimages%2Fmission.png&w=1920&q=75

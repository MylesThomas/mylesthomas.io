# Tech With Tim | How to Build a Developer's Portfolio Website From Scratch

## Link to Videos

[Part 1](https://www.youtube.com/watch?v=vGnzI3eHCsc)

[Part 2](https://www.youtube.com/watch?v=5oG_-CIrVSI)

## Introduction

Overview:
- React
- Version Control: Git/Gitlab
- Deployment
    - So that anybody can view it

Great project for resume
- Shows you know React/JavaScript
- Shows you understand DevOps related tasks:
    - Version Control
    - Deployment
    - Hosting a website

Part 1: Build out website using React
Part 2: DevOps related tasks ie. Version Control

# Part 1

## Spin up your Linodes

Spin up servers that you will use later to host the following:
- Gitlab server
- React application

Steps: 

### Linode 1: Gitlab Server

Note: This will all work for any React application, not just the one that we made in Part 1!

Start here: https://cloud.linode.com/linodes

Note: Linode = A high performance SSD Linux Server 
- SSD = Solid-state drive
    - Most common storage drives today
    - Smaller and faster than hard disk drives (HDDs)
    - If you primarily use your PC for web browsing and light work, you may not need as much storage space.

Create > Linode > Marketplace > Gitlab

Gitlab options
- enter your email 

Advanced options:
- The limited service sudo user to be created for the Linode: myles
- Password: enter a pw

Select an Image:
- Images: Debian 11
    - Note: Debian 11 is "a popular and freely available computer operating system (OS) that uses a Unix-like kernel-- typically Linux -- alongside other program components, many of which come from GNU Project".
    - You can also use Ubuntu if you'd like

Region
- Chicago, IL (us-ord)

Linode Plan
- Shared > Linode 8 GB

Notes:
- Linode recommends at least 8GB of RAM for Gitlab
- Dedicated server is more expensive because it is for full-duty workloads

Linode Label
- leave as-is ie. gitlab-us-ord

Root Password
- same as before

Create
- You now have to wait while this Linode spins up

### Linode 2: React Application 

Images
- Debian 10

Region
- us-ord

Linode Plan
- Shared CPU > Linode 2 GB

Linode Label
- react-app-myles-thomas-website

Create Linode 


## Project Setup in VSCode

### Create a directory 'resume-site
- cd .. 
- mkdir resume-site
- cd resume-site

### Install Node.js
- Check if you have it already: node –version
    - If not, go here and get it: [Nodejs website](https://nodejs.org/en)
        - Download location: C:\Program Files\nodejs\
        - Tools for Native Modules: check the box
        - Ensure the following is on the PATH: C:\Program Files\nodejs\
            - To ensure we don't get an error later on, create an empty folder here: 'C:\Users\Myles\AppData\Roaming\npm'
        - Restart computer after finishing this
        - node –v

### Create a new React Application
- npx create-react-app website
- y

### Install 3rd party package, (React Icons, gives nice icons for Twitter/IG/etc.)
- npm install --save react-icons

### Clean up our SRC / Delete some files:
- src/App.js
    - Delete everything except for the following:

    ``` css
    .App {
    text-align: center;
    }
    ```
- src/App.test.js
    - Delete the file

- logo.svg, reportWebVitals.js, setupTests.js
    - Delete these as well

- index.js
    - Delete the following:

    ``` js
    // Lines _ and 14-17, ie..:
    import reportWebVitals from './reportWebVitals';

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
    ```

- app.js
    - Delete everything so that your file now looks like this:

    ``` js
    // Note: I deleted lines 7-20 as well as Line 1
    import './App.css';

    function App() {
    return (
        <div className="App">

        </div>
    );
    }

    export default App;
    ```

### Start Our Website

- cd website
- npm start

Code should now be running on your local machine, and a browser window opens up to port 3000.
(There is nothing on the page because we deleted everything)

### Create Components

2 separate components:
1. Bio
2. Work Experience

New files to create in /src:
- Profile.js
- Profile.css

Once you fill these out correctly, your page should look like this:

![Blank-ish application]

Note: To get your app to update in the Google Chrome browser, save your files in VSCode.

## Troubleshooting / Adding my own changes

Adding links:

1. Add react-router-dom
- cd C:\Users\Myles\resume-site\website
- npm install react-router-dom

Note: Could go down rabbit hole of yarn add vs. npm install, but it appears that npm install takes up less disk space

Reference for help getting links to work:
- https://www.w3schools.com/css/css_link.asp

- https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react

- https://stackoverflow.com/questions/45046030/maintaining-href-open-in-new-tab-with-an-onclick-handler-in-react

- https://plainenglish.io/blog/react-open-link-in-new-tab

## Part 2

Note: I was unable to get to the Gitlab login, so all of the next instructions I did not actually get to complete myself.

## 


## Tech From Tim Video - Continued

## Setup Gitlab Server

Go to Linodes page: 
- Copy IP Address of Gitlab Server ie. gitlab-us-ord > Paste into Google Chrome Browser
    - You are now at the site with Gitlab loging 

Let's get the password now.

Linodes > 3 dots next to gitlab-us-ord > Launch LISH Console
- Try signing in as root
- If that fails, try signing in as myles (mine worked for root)
- Print out password: sudo cat /etc/gitlab/initial_root_password
- Highlight the long password > Copy via right clicking at top > Copy
    - This may be trick (Get LISH opened in a new tab)
- Log into Gitlab with the following:
    - root
    - 7Y694S8pzaYbDTWwvM7ThQJmtDjOYzMDmd54uwNmfLU=
    - Remember me

Sign-up restrictions
- Sign-up enabled: Uncheck
- Save changes

Change password:
- /-/profile/password/edit
- Change from super long one to one that you know
- Save password
- Login again

Projects > New Project > Create blank project
- project name: react-app
- visibility level: private
- initialize repository with a README: uncheck
- Create project

Add SSH Key
- Open command prompt on local
- ssh-keygen -t ed25519
- y (default options work)
- Locate where public key is saved in (.pub file) > Open file into notepad > Copy and paste into 'Key' box of 'Add an SSH Key' > Add Key

Now that we have done that, we can push code to this repository.

Upload our code:
- Open VSCode
- cd into resume-site/website (if you aren't already there... make sure npm package is here)
- git add .
- git commit -m "first commit"
Skip git global setup and cd'ing into existing_repo
(Go down to line 3 of 'PUsh an existing git repository')
- git remote add origin ...ip.linodeusercontent.com:gitlab-instance ....
- Push all branches to gitlab server: git push -u origin --all
- git push -u origin --tags

Refresh the page ie. Gitlab IP address's page, you should see all of the code!

We are done pushing code to Gitlab.

### Deal with Hosting our React App Server

Go to linodes > Copy IP address > Open command prompt
- ssh root@ipaddress
- yes
- enter password

You are now signed in.

Create a limited user (similar to gitlab) and Disable root access on the server
- adduser myles
- create pw
- skip the rest

Add user to the sudo group:
- adduser myles sudo

Logout, log back in as myles:
- logout
- ssh myles@ipaddress
- enter pw
- clear
- sudo
    - Verifies that sudo is working!

Disable root user:
- Delete root: sudo passwd -d root
- enter pw
- Lock password: sudo passwd -l root
- logout

Try to SSH as root to know it does not work:
- ssh root@ipaddress
- denid!

Go back in as Myles and prepare to make some installations.

Prepare for Installations:
- Clean cache: sudo apt clean all
- Update everything: sudo apt update

Installations: 
- Install nginx: sudo apt install nginx
- y
- Download/grab package from node source: curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -
    - We do this complicated bc if not, using apt you get a really older version ie. errors
- sudo apt update
- Install nodejs: sudo apt -y install nodejs
    - This should be version 16+, not 10
- Check that we auto already have npm: npm
- Check version of nodejs: node -v
- Install git: sudo apt install git
- y 

Clone our repository from Gitlab:
- Gitlab > SSH Keys
- Server command prompt that we have been working from: Create a new SSH Key: ssh-keygen -t ed25519
- y
- no passphrase needed
- cat /home/myles/.ssh/id_ed25519.pub
    - Note: The cat command reads each File parameter in sequence and writes it to standard output. I
- Copy those contents and paste into the SSH Keys on Gitlab > Add Key
- Project > Clone > Clone with SSH
- Linux remote server: git clone copied_ssh_from_last_step
- yes
- ls
    - You should see folder react-app
- cd react-app (or whatever your name is)
- ls
    - You should see package.json, etc.

Install npm packages
- npm install i
    - May need to do npm i react-icons, as well

Build NPM project:
- npm run build
- ls 
    - You will now see a build folder!

Place the build folder in the correct place:
- cp -r ./build/* /var/www//html
    - sudo: super user
    - cp: copy
    - r: recursive
    - *: all files in ./build
    - /var/www//html: default locatiom for nginx website

Note: Can use scp here I believe, it is an encrypted data copy.

Check that our website is online with the Linode IP address:
- Linodes > Copy IP address for 'react-app-...' > Paste into Chrome

Done! You have no successfully done the following:
- Hosted a react application
- Gitlab / Version control
- Good starting point for deploying websites

## Bonuses

Tim says SSL and Custom Domains are beyond scope of this so... here goes nothing! 

---

## Set up SSL 



## Get a custom domain



## Sam Meech-Ward - AWS Route 53 Domain Name

[Link to video](https://www.youtube.com/watch?v=jDz4j_kkyLA)

Before going through the steps for Sam Meech-Ward's video on Deploy React App to S3 with Custom Domain, we must have a custom domain!

Route 53: A Powerful DNS Service offered by AWS

What we do in this video: 
- Buy a domain from a 3rd party domain provider
- Connect it to Route 53
    - Start routing traffic to your services in AWS using Route 53 

Focus for today: Simple route today for a custom domain name
- There are WAY more features you can explore, though

Steps:
1. https://aws.amazon.com/route53/ > Get started for free > Route 53 Dashboard > Create hosted zone
- What is a hosted zone: How you manage a single domain name ie. Sam's is smw.wtf

2. Go to buy a domain name
- namecheap.com

Notes:
- Each hosted zone costs ~$0.50/month, even on the free tier
- You can purchase domain names directly through AWS
    - This can be more expensive AND more limiting, though

3. Optional if you haven't done so already: Set up a hosted zone on AWS
    - If you haven't set that up yet, head to this link: [Link](https://us-east-1.console.aws.amazon.com/route53/v2/hostedzones?region=us-east-1#)
    - Domain name: make it the same as the one you just purchased
    - Description: optional
    - Type: Public hosted zone (you want people to be able to access it over the internet...)
    - Create > Done!

Notes:
- Why we do this: To point our domain name to AWS's nameservers
- Anytime someone goes to your domain name (mylesthomas.io), the end location on the internet is determined by AWS
- Once you create your hosted zone, you will see multiple name servers under the 'Value/Route traffic to' column of the dataframe for your new hosted zone.
    - Focus on the row with 'NS' for 'Type'

4. Manage the domain / Copy the NS values from AWS to Namecheap
- Buy the domain > Manage > Nameservers > Custom DNS
- Put in the Nameservers from AWS
    - Do it 1 by 1 (There are 4 for me)
    - Make sure to keep the dots on the end

- Hit the checkbox to Save
    - Once it has saved, the connection is complete (you have purchased the domain name and it is routed to the Route 53 hosted zone)

Notes:
- For the changes to propogate around the world, it may take 24 hours
    - Things may not work for an entire day

5. Optional: Create a simple record to point to an EC2 instance
- This is important when scaling up applications
    - Can circle back to this

Notes: 
- More on EC2 instances: [Link](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)


## Sam Meech-Ward - aws cli

Point of Command Line Interface:
- "wouldn't it be nice to manage AWS infrastructure with code instead of clicking with your mouse?"

1. Install CLI on your laptop
- https://aws.amazon.com/cli/ > Install Windowws Version 
- OR msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi
- Check that it worked: aws --version
    - (I had to restart my computer before this worked...)

2. Use CLI to create an S3 bucket
- Look at Sam's post: [link](https://www.sammeechward.com/aws-cli-s3-static-website)
    - his advice: use blog posts, only use AWS documentation when necessary!
- aws s3 mb "s3://your-bucket-name"

Note: This won't work because you have
- Hence error "Unable to locate credentials"

3. Create an IAM user
- Set up another user that will be your laptop
    - IAM (https://aws.amazon.com/iam/) > Users
        - Good practice: have a unique IAM for each laptop/device you use

    - Add user
        - user name: myles-old-windows-grey
        - access key: programmatic access
        - next

    - Set permissions: Attach existing policies directly
        - AdministratorAccess
            - gives the user control to everything in AWS
        - next

You now have a user with full access to your AWS account.

4. Configuring the AWS CLI
- aws configure
    - copy and paste key id
    - copy and paste secret access key (you can only view this once - be careful)
    - leave default
    - leave default

5. Create a brand new bucket
- aws s3 mb "s3://bucket-name-for-a-demo"

This is a very simple example, but if you refresh your S3 buckets you will see the new bucket.

Examples of more advanced scripts for real life use cases:
- [Sam's website](https://www.sammeechward.com/aws-cli-vpc-subnets-ec2-and-more)
    - Once you get into something like this, you will end up using tools like Terraform or AWS CDK (Cloud Development Kit)
        - You still have to set this up beforehand to get credentials in!
    

## Sam Meech-Ward - Deploy React App to S3 with Custom Domain

[Link](https://www.youtube.com/watch?v=7djMZ5OTG_E&t=84s)

AWS S3: Lets your store files in the cloud (Basic) 
Cloudfront: Take files stored in S3 bucket, and distribute them globablly (Advanced)
- This is to reduce latency when people requests our files
- More power with cloudfront
    - Custom domains
    - SSL Certificates
    - and more!

What this video is:
- Host a React app using Cloudfront
- Set up custom domain name with SSL Certificate, which lets you access over HTTPS

Note: What is an SSL Certificate?
- a digital certificate that authenticates a website's identity and enables an encrypted connection.
- If you don't have an SSL Certificate: your site visitors and customers are at higher risk of being having their data stolen.
    - Your site security is also at risk without encryption. SSL protects website from phishing scams, data breaches, and many other threats. (Ultimately, It builds a secure environment for both visitors and site owners.)

Note: You can deploy an app to just S3, but...
- Simpler / Less control
- Can't serve website over HTTPS

### Build App
Goal: Package the JS/HTML/CSS and bundle/ship off
- yarn build (I will do npm run build)

We should now have a folder nmaed dist (OR build).
- Inside of this: index.html, among others

How to start using cloudfront? Make an S3 Bucket.

### Making an S3 Bucket

[Directions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html)

1. open the Amazon S3 console at https://console.aws.amazon.com/s3
2. Buckets > Create Bucket
- name: my-site-for-portfolio-resume
- default settings work

Your bucket is now ready to store files! 

Note: Cloudfront uses this files to set it up as a website.

### Upload files to S3 Bucket

AWS CLI: Nice way to do this, but we will do that later.

Steps:
1. Click on bucket > Upload
2. Open new folder build (his is dist)
3. Drag and drop all of it into the s3 bucket
4. Click 'Upload' at the bottom

All of the files have been loaded AND react now exists in the S3 bucket.

Now that S3 is done, time to go to Cloudfront and build a new Cloudfront distribution!

### Create a new Cloudfront distribution

[Directions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-creating-console.html)

1. open the CloudFront console at https://console.aws.amazon.com/cloudfront/v3/home

2. Create a Cloudfront distribution
- Origin domain: The s3 bucket we just created ie. my-site-for-portfolio-resume.s3.us-east-2.amazonaws.com

What this does:
- Takes those files in S3
- Copies them globablly
    - We can now configure how they can be accessed over the internet...

- S3 Bucket access: Yes use OAI (For me: Origin access > Legacy access identities)
    - OAI = Origin Access Identity
    - This allows us to create a new OAI, which will make the S3 bucket private
        - (nothing can access the bucket itself)
        - Any access to those files must be done via Cloudfront!

- Create new OAI
    - Leave as-is ie. my-site-for-portfolio-resume.s3.us-east-2.amazonaws.com

- Bucket policy: Yes, update the bucket policy
    - Creating this distribution will update the S3 bucket so that now, only Cloudfront has access

- Viewer protocol policy: Redirect HTTP to HTTPS
    - If anyone goes to the website over just HTTP, they will be sent via HTTPS (Disallows anyone from going over HTTP)

- Allowed HTTP methods: GET, HEAD
    - Because it is a static website, all they need is GET, HEAD (not always the case, but today it is!)

- Settings > Price class: I chose NA/Europe
    - All edge locations: No matter where they are in the world, when they make a request to the website, they will get it the closest location
    - Use only NA and Europe: Saves money, worst performance

- Alternate domain name (CNAME) > Add item > Paste your custom domain name
    - This is where we set up the custom domain name (Cloudfire gives long ugly names automatically)
    - You can use something like mysite.mylesthomas.io if you want, but we will use the root domain name here
        - Make sure to copy and paste EXACTLY what you have in Route 53 Hosted zones (ie. mylesthomas.io)

Note: How to get the domain name for above:
- Open another tab > AWS > Route 53

![Directions for setting up domain name on Route 53 (I also have notes for how to do this earlier in the markdown file)](https://www.youtube.com/watch?v=jDz4j_kkyLA)

172.233.208.181

To make sure this works over HTTPS, we need to have a Custom SSL certificate!

- Custom SSL certificate: Request certificate > Request a public certificate > Next
    - Fully qualified domain name: mylesthomas.io
    - Validation method: Leave as-is (DNS validation)
        - This will validate via Route 53
    - Key algorithm: RSA 2048
        - Most widely used, because ... [Link to google search](https://www.google.com/search?q=why+do+people+use+rsa+2048&rlz=1C1CHBF_enUS978US979&oq=why+do+people+use+rsa+2048&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDcxMjdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8)

    - Hit 'Request'
        - You will now see that you need further action to complete the validation / approval of the certificate

    - Click on ID of certificate > Scroll down to 'Create records in Route 53' > Click > Create Records
        - You will now see 'Pending validation' for a minute or two under the 'Status' column
        - Refresh after a minute or 2 and Status will be 'Issued'

            - Note: Make sure to wait for it to turn green / say Issued before moving on to next step!

    - Refresh button > Select the ACM certificate from the dropdown
        - Default root object
            - Because this is a static website, we want it so that any time you make a request to the Cloudfront distribution, it will serve up the index.html file (from the build folder - this is the entry point to the React application!)

    - Click 'Create Distribution'
        - It will go from 'Deploying' to 'Deployed' under Last modified

Note: I got an error because I did not select a Web Application Firewall (WAF)
- Remedy: Select 'Enable security protections' and click yes for 'Use monitor mode'


While we wait for the Cloudfront Distribution to deploy, let's head over to Route 53 and create a record for the Cloudfront Distribution.

- Route 53 > Hosted zones > mylesthomas.io > Create record > Simple routing
    - Quick create record: 
        - sub-domain: leave blank
        - Value/Route traffic to: Alias on > Alias to CloudFront Distribution > Select your brand new Cloudfront Distribution
            - Leave the location as-is
        - Routing policy: leave as 'Simple Routing'
        - press Create records!

Note: This can take 30 minutes or even hours to propogate.
- ie. you can't actually go to mylesthomas.io and see the site yet

While we wait, there is 1 more thing to do in Cloudfront!

- Create custom error response
    - Go back to Cloudfront Distributions > Click on ID > Error pages > Create custom error response
        - We do this because when hosting a React app / single page application, we are simply serving up and .html file (Front end javascript code handles a lot of the work) and if you go to a page that does not exist, the response will be a 403 status code
            - Most likely, our app is requesting something that does not exist since we are using React router or something like that, and we just want to get the .html file to the user and let Javascript do the work!
    
    - HTTP error code: 403 Forbidden
    - Customize error response: Yes
        - Response page path: /index.html
        - HTTP Response code: 200 OK

Cloudfront should now be completely setup!
- Cloudfront probably has not finished deploying
- same with Route 53
- All of the settings are setup tho!

Going to go away for a few hours so that when I get back everything will be deployed...

Checks before continuing:
- Cloudfront Distribution: Deployed
- Route 53: 
- Go to mylesthomas.io and see that it is working!


### How to make an update to this website

Go into the app's code on your local computer. (In VSCode)
- Add a new feature/make any change
    - He does a new p tag with 'some update' just for show
    - I am going to change mine in the following ways:
        - all links open in a new tab
        - color of shotquality links are different
        - divide work experience up
            - current
            - past

- Check that your changes look right
    - npm start

- Rebuild the project
    - npm run build
        - updated versions of build assets are now in the 'build' folder

- Update the files in your S3 bucket
    - S3 (https://aws.amazon.com/s3/) > Click on your S3 Bucket > Upload > drag build folder
        - This will overwrite the current files in S3

Note: If you go to your website you will not see the update yet
- This is because Cloudfront does a lot of caching
    - We won't see the update for 24 hours, unless...

- Tell Cloudfront to invalidate its caches and update
    - Cloudfront (https://aws.amazon.com/cloudfront/) > Click on your distribution > Invalidations > Create invalidation
        - Add object paths: /*
            - This does it for all files

Once this is done (ie. Status is done in Cloudfront) your website will be updated!



But let's be honest, doing all of that by hand could get pretty annoying...

This is where AWS CLI comes into play!

### AWS Command Line Interface (CLI)

AWS Command Line Interface (CLI)

First, set up CLI.
- Watch this [video](), or scroll up to view the instructions on setting this up before you start

Next, set up the Command Line Interface.

- Sync files from local computer to S3 bucket
    - update package.json to sync the files

        ``` python
        "scripts": { # mock
            "sync": "aws s3 sync directory-path 's3://your-bucket-name'"
        }
        
        "scripts": { # all of the files in dist
            "sync": "aws s3 sync ./dist/* 's3://my-site-for-portfolio-resume'"
        }
        ```

    - update package.json to invalidate the cloudfront distribution

        ``` python
            "scripts": { # mock
                "invalidate": "aws cloudfront create-invalidation --distribution-id --paths '/*'"
            }
            
            "scripts": { # invalidate every single file in the distribution
                "invalidate": "aws cloudfront create-invalidation --EKC6GEI0EY02S --paths '/*'"
            }
            ```

    - yarn build

    - yarn sync
    
    - yarn invalidate


### Updating my Website to have better styling by leveraging CSS frameworks

``` css

```

### Updating the Title and Icon in Google Chrome

Title
- Head to public/index.html
- Line 27: Change 'React App' to 'mylesthomas.io' 

Logo
- Replace the favicon.ico with your own
    - https://favicon.io/favicon-converter/ > Upload your photo > Download
    - Unzip the .zip folder > Drag into public folder > Replace
        - I used this white logo from google drive: [Link to photo](https://drive.google.com/file/d/1kiEhdojVZ-IamD7GiUQluAS-AWBrfcHh/view?usp=sharing)

Check that your changes look right
- npm start

Note: If favicon/logo is not showing up, try another browser. This can be a cache related 'issue'

Rebuild the project
- npm run build
    - updated versions of build assets are now in the 'build' folder

Update the files in your S3 bucket
- S3 (https://aws.amazon.com/s3/) > Click on your S3 Bucket > Upload > Open build folder > Drag 7 files + 1 folder 'static'
    - This will overwrite the current files in S3
        - To be safe, you can delete everything in the S3 bucket before uploading the build folder
        - Make sure to upload the contents of 'build', not 'build' itself (There should be 8 objects in your S3 Bucket)

Tell Cloudfront to invalidate its caches and update
- Cloudfront (https://aws.amazon.com/cloudfront/) > Click on your distribution > Invalidations > Create invalidation
    - Add object paths: /*
        - This does it for all files

Once this is done (ie. Status is done in Cloudfront) your website will be updated!

Try it out: [mylesthomas.io](https://mylesthomas.io/)
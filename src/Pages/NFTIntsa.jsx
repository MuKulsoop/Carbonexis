import React from 'react';
// import { Card, CardContent, CardFooter, CardHeader } from '@/Components/ui/card';
import { Card, CardContent, CardFooter, CardHeader } from '@/Components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { ScrollArea } from '@/Components/ui/scroll-area';
import { Separator } from '@/Components/ui/separator';
import { MessageCircle, Share2, Bookmark, MoreHorizontal, CirclePlus, Heart, Twitter } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/Components/ui/dialog';

const NFTInsta = () => {

  const [commentsOpen, setCommentsOpen] = useState(false);
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [currentPostId, setCurrentPostId] = useState(null);

  const openComments = (postId) => {
    setCurrentPostId(postId);
    setCommentsOpen(true);
  };

  const openShareDialog = (postId) => {
    setCurrentPostId(postId);
    setShareDialogOpen(true);
  }


  const mockComments = {
    1: [
      { username: 'nature_lover', text: 'Beautiful view! 😍', likes: 12 },
      { username: 'mountain_climber', text: 'Where is this?', likes: 3 },
      { username: 'travel_photographer', text: 'The lighting is perfect! What camera did you use?', likes: 5 },
      { username: 'hikingaddict', text: 'I need to visit this place ASAP!', likes: 2 },
      { username: 'outdoors_girl', text: 'This is absolutely breathtaking!', likes: 7 },
      { username: 'landscapepro', text: 'The composition is stunning. Mind if I ask what time of day this was taken?', likes: 4 },
      { username: 'sunset_chaser', text: 'Nothing beats a good sunset 🌅', likes: 9 }
    ],
    2: [
      { username: 'foodie_central', text: 'Looks amazing! Recipe please?', likes: 8 },
      { username: 'pasta_lover', text: 'Making me hungry! 🤤', likes: 5 },
      { username: 'chef_jamie', text: 'Great plating! Did you use fresh basil?', likes: 6 },
      { username: 'cooking_mom', text: 'Ill try making this tonight!', likes: 2 },
      { username: 'italianfoodie', text: 'As an Italian, I approve this pasta 👌', likes: 15 },
      { username: 'healthy_eats', text: 'Homemade is always the best! What ingredients did you use?', likes: 3 },
      { username: 'food_photographer', text: 'The lighting on this shot is perfect', likes: 7 }
    ]
  };
  return (

    <div className="min-h-screen">
     
      <main className="container mx-auto max-w-2xl px-4 py-6 space-y-6">
        {/* Posts */}
        {[1, 2].map((postId) => (
          <Card key={postId} className="overflow-hidden border-none">
            <CardHeader className="flex flex-row items-center justify-between p-4">
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={`/api/placeholder/32/32?text=User${postId}`} />
                  <AvatarFallback>U{postId}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">user_{postId}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </CardHeader>

            <div className="relative aspect-square">
              <img 
                src={`https://media.decentralized-content.com/-/rs:fill:1180:1574/g:ce/f:webp/aHR0cHM6Ly9tYWdpYy5kZWNlbnRyYWxpemVkLWNvbnRlbnQuY29tL2lwZnMvYmFmeWJlaWh0NzMyYjVtcGlqaGJhdTNuNHZpd3M3b2ZtaG9jdXVkeWZ0bnJlbHg1eHp0eW1memR5NHE`} 
                alt={`Post ${postId}`}
                className="object-cover w-full h-full"
              />
            </div>

            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon" className="hover:text-green-500">
                    <CirclePlus className="h-7 w-7" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MessageCircle className="h-7 w-7" />
                  </Button>
                  <Button onClick={() => openShareDialog(postId)} variant="ghost" size="icon">
                    <Share2 className="h-7 w-7" />
                  </Button>
                </div>
                <Button className="text-white rounded-full bg-black hover:bg-gray-800" variant="secondary">
                  Buy
                </Button>
              </div>

              <p className="font-medium text-sm mb-1">123 mints</p>
              
              <div className="space-y-1 mb-2">
                <p className="text-sm">
                  <span className="font-medium">user_{postId}</span>{' '}
                    Amazing sunset view from my hike today! #nature #adventure </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm">
                  <span className="font-medium">commenter_1</span>{' '}
                  {postId === 1 ? "Beautiful view! 😍" : "Looks amazing! Recipe please?"}
                </p>
                <p className="text-sm">
                  <span className="font-medium">commenter_2</span>{' '}
                  {postId === 1 ? "Where is this?" : "Making me hungry! 🤤"}
                </p>
              </div>
              <Button                   
              onClick={() => openComments(postId)}
              variant="link" size="sm" className="p-0 h-auto text-gray-500">
                  View all {mockComments[postId].length} comments
            </Button>
            </CardContent>

            
          </Card>
        ))}
      </main>

        {/* share dialog */}
        <Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-left">Share</DialogTitle>
          </DialogHeader>

          <div className="shareContent block gap-x-10">

            <div className="icons flex gap-3">
            <Button variant="secondary" size="icon" className="rounded-full w-12 h-12">
                    <Twitter className='w-12 h-12' />
            </Button>
            <Button variant="secondary" size="icon" className="rounded-full w-12 h-12">
                    <Twitter className='w-12 h-12' />
            </Button>
            <Button variant="secondary" size="icon" className="rounded-full w-12 h-12">
                    <Twitter className='w-12 h-12' />
            </Button>
            <Button variant="secondary" size="icon" className="rounded-full w-12 h-12">
                    <Twitter className='w-12 h-12' />
            </Button>
            </div>
            

          </div>
          
          

        </DialogContent>
        </Dialog>

       {/* Comments Dialog */}
       <Dialog open={commentsOpen} onOpenChange={setCommentsOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Comments</DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-96 pr-4 -mr-4">
            <div className="space-y-4 py-4">
              {currentPostId && mockComments[currentPostId].map((comment, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={`/api/placeholder/32/32?text=${comment.username.charAt(0)}`} />
                    <AvatarFallback>{comment.username.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start">
                      <p className="text-sm">
                        <span className="font-medium">{comment.username}</span>{' '}
                        {comment.text}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-gray-500">2h</span>
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs text-gray-500">
                        {comment.likes} likes
                      </Button>
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs text-gray-500">
                        Reply
                      </Button>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-5 w-5">
                    <Heart className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="pt-2 border-t">
            <div className="flex items-center">
              <Input 
                placeholder="Add a comment..." 
                className="border-none bg-transparent flex-grow focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button variant="ghost" className="text-blue-500 font-medium">
                Post
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NFTInsta;
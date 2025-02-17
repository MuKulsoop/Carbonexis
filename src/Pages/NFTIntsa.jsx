import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from 'lucide-react';

const NFTInsta = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
     
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
                className="object-cover w-full h-full rounded-[10px]"
              />
            </div>

            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon" className="hover:text-red-500">
                    <Heart className="h-6 w-6" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MessageCircle className="h-6 w-6" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-6 w-6" />
                  </Button>
                </div>
                <Button variant="ghost" size="icon">
                  <Bookmark className="h-6 w-6" />
                </Button>
              </div>

              <p className="font-medium text-sm mb-1">123 likes</p>
              
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
              <Button variant="link" size="sm" className="p-0 h-auto text-gray-500">
                  View all 42 comments
            </Button>
            </CardContent>

            
          </Card>
        ))}
      </main>
    </div>
  );
};

export default NFTInsta;
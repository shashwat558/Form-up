import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import {z} from "zod";
import { useForm } from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form';
import { Input } from './ui/input';


const formSchema = z.object({
  title: z.string(),
  description: z.string()
})

type formSchemaType = z.infer<typeof formSchema>



const CreateFormButton = () => {

  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (values: formSchemaType) => {
    console.log(values)

  }
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Create a form</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Create Form
          </DialogTitle>
          <DialogDescription>
            Create a new form to start collecting responses
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
            <FormField
              name='name'
             control={form.control}
             
             render={({feild}) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...feild}/>
                </FormControl>
              </FormItem>
             )}
            >

            </FormField>
          </form>

        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateFormButton
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Comments, CommentsPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Comments",
  component: Comments,
} as ComponentMeta<typeof Comments>;

const Template: ComponentStory<typeof Comments> = (args: CommentsPropsI) => (
  <x.div display="flex" gap="20px">
    <Comments {...args} />
    <Comments {...args} fill="red.500" />
    <Comments {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };

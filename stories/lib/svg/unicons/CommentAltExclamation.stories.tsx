import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import {
  CommentAltExclamation,
  CommentAltExclamationPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltExclamation",
  component: CommentAltExclamation,
} as ComponentMeta<typeof CommentAltExclamation>;

const Template: ComponentStory<typeof CommentAltExclamation> = (
  args: CommentAltExclamationPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentAltExclamation {...args} />
    <CommentAltExclamation {...args} fill="red.500" />
    <CommentAltExclamation {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };

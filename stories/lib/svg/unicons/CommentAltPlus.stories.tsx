import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentAltPlus, CommentAltPlusPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CommentAltPlus",
  component: CommentAltPlus,
} as ComponentMeta<typeof CommentAltPlus>;

const Template: ComponentStory<typeof CommentAltPlus> = (
  args: CommentAltPlusPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentAltPlus {...args} />
    <CommentAltPlus {...args} fill="red.500" />
    <CommentAltPlus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };

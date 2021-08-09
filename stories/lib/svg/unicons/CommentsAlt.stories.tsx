import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentsAlt, CommentsAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentsAlt",
  component: CommentsAlt,
} as ComponentMeta<typeof CommentsAlt>;

const Template: ComponentStory<typeof CommentsAlt> = (
  args: CommentsAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentsAlt {...args} />
    <CommentsAlt {...args} fill="red.500" />
    <CommentsAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };

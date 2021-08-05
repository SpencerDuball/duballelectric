import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ImageBroken, ImageBrokenPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ImageBroken",
  component: ImageBroken,
} as ComponentMeta<typeof ImageBroken>;

const Template: ComponentStory<typeof ImageBroken> = (
  args: ImageBrokenPropsI
) => (
  <x.div display="flex" gap="20px">
    <ImageBroken {...args} />
    <ImageBroken {...args} fill="red.500" />
    <ImageBroken {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };

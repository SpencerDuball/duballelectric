import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ImageSearch, ImageSearchPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ImageSearch",
  component: ImageSearch,
} as ComponentMeta<typeof ImageSearch>;

const Template: ComponentStory<typeof ImageSearch> = (
  args: ImageSearchPropsI
) => (
  <x.div display="flex" gap="20px">
    <ImageSearch {...args} />
    <ImageSearch {...args} fill="red.500" />
    <ImageSearch {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };

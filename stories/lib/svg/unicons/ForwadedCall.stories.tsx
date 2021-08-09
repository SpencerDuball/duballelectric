import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ForwadedCall, ForwadedCallPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ForwadedCall",
  component: ForwadedCall,
} as ComponentMeta<typeof ForwadedCall>;

const Template: ComponentStory<typeof ForwadedCall> = (
  args: ForwadedCallPropsI
) => (
  <x.div display="flex" gap="20px">
    <ForwadedCall {...args} />
    <ForwadedCall {...args} fill="red.500" />
    <ForwadedCall {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
